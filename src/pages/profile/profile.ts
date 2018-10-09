import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {RegisterpscychometricPage} from "../registerpscychometric/registerpscychometric";
import {CareerpathPage} from "../careerpath/careerpath";
import {JobsmalaysiaPage} from "../jobsmalaysia/jobsmalaysia";
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import {Http} from "@angular/http";
import {ResultstatusPage} from "../resultstatus/resultstatus";
import {StudentpscychometricPage} from "../studentpscychometric/studentpscychometric";
import {LoginPage} from "../login/login";
import {SearchbarPage} from "../searchbar/searchbar";
import {JadualslidesPage} from "../jadualslides/jadualslides";
import {AsramaPage} from "../asrama/asrama";
import {PeperiksaanPage} from "../peperiksaan/peperiksaan";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

    public employer_code: string = '';
    response:any = '';
    public employer_id: number;
    public employer_name: string = '';

    constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage, public http: Http,
                public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

    psychometric() {
        this.navCtrl.push(StudentpscychometricPage);
    }

    careerpath() {
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
            var url = 'http://103.75.190.110/api/laluankerjaya';


            //


            this.http.get(url)
                .subscribe(data => {
                    this.response = data.json();
                    console.log(this.response);

                    var keputusan = this.response.status;
                    // var employer_name = this.response.employer_name;
                    // var employer_id = this.response.employer_id;

                    loading.dismiss();

                    if (keputusan == 'BERJAYA') {
                        this.showAlert('Tahniah!', 'Ini adalah Lauan kerjaya anda. Teruskan Usaha');
                        this.navCtrl.push(CareerpathPage);
                    } else {
                        this.showAlert('Maaf!', 'Data anda tiada');
                        this.navCtrl.setRoot(ProfilePage);

                    }
                }, error => {
                    loading.dismiss();
                    this.showAlert('Ralat', 'Gagal menghantar pengesahan ke server');

                });

        });
    }


    jobsmalaysia() {
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
            var url = 'http://103.75.190.110/api/jobmalaysia';


            //


            this.http.get(url)
                .subscribe(data => {
                    this.response = data.json();
                    console.log(this.response);

                    var keputusan = this.response.status;
                    // var employer_name = this.response.employer_name;
                    // var employer_id = this.response.employer_id;

                    loading.dismiss();

                    if (keputusan == 'BERJAYA') {
                        this.showAlert('Tahniah!', 'Maklumat anda telah dihantar ke JobsMalaysia');

                        this.navCtrl.push(JobsmalaysiaPage);
                    } else {
                        this.showAlert('Maaf!', 'Data anda tidak dapat dihantar');
                        this.navCtrl.setRoot(ProfilePage);

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
        openProfilePage(item) {
        this.navCtrl.setRoot(ProfilePage);
    }

    openPeperiksaanPage(item) {
        this.navCtrl.setRoot(PeperiksaanPage);
    }

    openSearchbarPage(item) {
        this.navCtrl.setRoot(SearchbarPage);
    }

    openJadualslidesPage(item) {
        this.navCtrl.setRoot(JadualslidesPage);
    }

    openAsramaPage(item) {
        this.navCtrl.setRoot(AsramaPage);
    }

}
