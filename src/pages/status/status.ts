import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {Http} from "@angular/http";
import {ProfilePage} from "../profile/profile";
import {ResultstatusPage} from "../resultstatus/resultstatus";

/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {

    public employer_code: string = '';
    response:any = '';
    public employer_id: number;
    public employer_name: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage, public http: Http,
              public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

    // next() {
    //     this.navCtrl.push(ResultstatusPage);
    // }


    verifyEmployerID() {
        //show loading spinner
        const loading = this.loadingCtrl.create({
            content: 'Please wait..'
        });
        loading.present();

        console.log('simpan data from storage');
        //simpan data dalam storage
        this.storage.set('employer_code', this.employer_code).then(value => {
            this.employer_code = value;
            console.log(this.employer_code);
            //sent to server
            console.log('try to send data to server');

            var sendData = {
                "employer_code": this.employer_code
            };
            //url server
            // var url = 'http://ihi.test/api/employer/profile';
            // var url = 'http://jpp.mohr.gov.my/api/employer/profile';
            // var url = 'http://iotg.mohr.favotechsystem.com/api/survey/result';
            // var url ='http://127.0.0.1:8000/api/survey/result';
            // var url = 'http://ihiweb.test/api/survey/result';
            var url = 'http://103.75.190.110/api/permohonan/'+this.employer_code;


            //


            this.http.get(url)
                .subscribe(data => {
                    this.response = data.json();
                    console.log(this.response);

                    var status = this.response.meta.saveStatus;
                    var keputusan = this.response.data.keputusan;
                    // var employer_name = this.response.employer_name;
                    // var employer_id = this.response.employer_id;

                    loading.dismiss();

                    if (keputusan == 'LULUS') {
                        this.showAlert('Nama : ' + this.response.data.nama, 'Tahniah Anda Telah Berjaya!');

                        //letak employer_name & id dalam storage
                        this.storage.ready().then(() => {
                            this.storage.set('nama', this.response.data.name);
                            this.storage.set('nokp', this.response.data.nokp);
                        });
                        this.navCtrl.push(ResultstatusPage);
                    } else {
                        this.showAlert('Maaf Permohonan Anda Tidak Berjaya', 'Sila cuba sekali lagi pada masa akan datang');
                        this.navCtrl.setRoot(StatusPage);

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
