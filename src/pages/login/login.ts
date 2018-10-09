import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import {Http} from "@angular/http";
import {ResultstatusPage} from "../resultstatus/resultstatus";

/**
 * Generated class for the LoginPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
    * Ionic pages and navigation.
*/

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    public username: string = '';
    public password: string = '';
    response:any = '';
    data:any = '';
    public nokp: number;
    public name: string = '';
    surveyResult: any = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertCtrl: AlertController,  public http: Http, public loadingCtrl: LoadingController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');

       //paparkan kandungan storage terkini
        this.storage.get('surveyResult').then(value => {
            console.log(value);
        });
    }

    verifyEmployerID() {
        //show loading spinner
        const loading = this.loadingCtrl.create({
            content: 'Please wait..'
        });
        loading.present();

        console.log('simpan data from storage');
        //simpan data dalam storage
        this.storage.set('username', this.username).then(value => {
            this.username = value;
            console.log(this.username);
            //sent to server
            console.log('try to send data to server');
            //url server
            // var url = 'http://ihi.test/api/employer/profile';
            // var url = 'http://jpp.mohr.gov.my/api/employer/profile';
            // var url = 'http://iotg.mohr.favotechsystem.com/api/survey/result';
            // var url ='http://127.0.0.1:8000/api/survey/result';
            // var url = 'http://ihiweb.test/api/survey/result';
            var url = 'http://103.75.190.110/api/auth/login';


            //
            var sendData = {
                "username": this.username,
                "password": this.password
            };

            this.http.post(url, sendData)
                .subscribe(data => {
                    this.response = data.json();
                    console.log(this.response);

                    var status = this.response.meta.saveStatus;
                    // var employer_name = this.response.employer_name;
                    // var employer_id = this.response.employer_id;

                    loading.dismiss();
                    // var data;
                    console.log('savesatatus' + this.response.meta.saveStatus);

                    if (status == 'pass') {
                        this.showAlert('Nama : ' + this.response.data.name, 'Selamat Datang!');

                        //letak employer_name & id dalam storage
                        this.storage.ready().then(() => {
                            this.storage.set('nokp', this.response.data.nokp);
                            this.storage.set('name', this.response.data.name);
                        });
                        this.navCtrl.push(ProfilePage);
                    } else {
                        this.showAlert('Maaf Tidak Berjaya', 'Sila cuba sekali lagi pada masa akan datang');
                    //
                    }
                }, error => {
                    loading.dismiss();
                    this.showAlert('Ralat', 'Gagal menghantar pengesahan ke server');

                });

        });
    }

    showAlert(title, subTitle) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['OK']
        });
        alert.present();
    }


}
