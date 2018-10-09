import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController, Events, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {RegisterpscychometricPage} from "../registerpscychometric/registerpscychometric";
import {CareerpathPage} from "../careerpath/careerpath";
import {JobsmalaysiaPage} from "../jobsmalaysia/jobsmalaysia";
import {LoginPage} from "../login/login";
import {ResultstatusPage} from "../resultstatus/resultstatus";
import {SearchbarPage} from "../searchbar/searchbar";
import {JadualslidesPage} from "../jadualslides/jadualslides";
import {AsramaPage} from "../asrama/asrama";
import {PeperiksaanPage} from "../peperiksaan/peperiksaan";
import {HttpClient} from "@angular/common/http";
import {Http} from "@angular/http";

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
    response: any = '';
    profiles: any = '';
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public http: Http,
              public events: Events) {


      //show loading spinner
      const loading = this.loadingCtrl.create({
          content: 'Please wait..'
      });
      loading.present();

      //fetch data dari storage
      console.log('fetch data from storage');
      //tarik data sedia ada dalam storage
      this.storage.get('profileResult').then(value => {
          // this.surveyResult = value;
          //
          //   //sent to server
          console.log('try to send data to server');
          //
          var sendData = {
              // "surveyResult": this.surveyResult.jawapan
          };

          // var url = 'http://iotg.mohr.favotechsystem.com/api/survey/result';
          // var url ='http://127.0.0.1:8000/api/survey/offline-result';
          // var url = 'http://ihiweb.test/api/survey/result';
          // var url = 'http://ihi.test/api/survey/offline-result';
          var url = 'http://103.75.190.110/api/pelajar/nokp';
          console.log(url);

          //


          this.http.get(url)
              .subscribe(data => {
                  this.response = data.json();
                  console.log('aa :',this.response);

                  this.profiles = this.response.data;
                  console.log('bb :' ,this.profiles);

                  loading.dismiss();

                  // this.showAlert('Terima Kasih', 'Terima kasih. Soal selidik anda telah dihantar');

              }, error => {
                  loading.dismiss();
                  this.showAlert('Ralat', 'Gagal menghantar maklumat peribadi ke server');


              });

      });

  }

    send() {

    }

    showAlert(title, subTitle) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['OK']
        });
        alert.present();
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

    careerpath() {
        this.navCtrl.push(CareerpathPage);
    }

    jobsmalaysia() {
        this.navCtrl.push(JobsmalaysiaPage);
    }

    psychometric() {
        this.navCtrl.push(JobsmalaysiaPage);
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
