import { Component } from '@angular/core';
import {AlertController, Events, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {Http} from "@angular/http";
import {ListPage} from "../list/list";

/**
 * Generated class for the ListilpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listilp',
  templateUrl: 'listilp.html',
})
export class ListilpPage {

    selectedLanguage:string;
    surveyResult:any=[];
    response: any = '';
    heroes: any = '';
    language: string = '';
    employer_code:string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public storage: Storage,
                public alertCtrl: AlertController,
                public loadingCtrl: LoadingController,
                public http: Http,
                public events: Events) {

        //paparkan kandungan employer_code
        // this.storage.get('surveyResult').then(value => {
        //     this.surveyResult = value;
        //     console.log('Employer Code:', value);
        // });


        // this.storage.get('surveyResult').then(value => {
        //     console.log(value);
        //     this.surveyResult = value;
        //     console.log('ktlistilp' + this.surveyResult);
        // });

        //show loading spinner
        const loading = this.loadingCtrl.create({
            content: 'Please wait..'
        });
        loading.present();

        //fetch data dari storage
        console.log('fetch data from storage');
        //tarik data sedia ada dalam storage
        this.storage.get('surveyResult').then(value => {
            this.surveyResult = value;
            //
            //   //sent to server
            console.log('try to send data to server');
            //
            var sendData = {
                "surveyResult": this.surveyResult.jawapan
            };

            // var url = 'http://iotg.mohr.favotechsystem.com/api/survey/result';
            // var url ='http://127.0.0.1:8000/api/survey/offline-result';
            // var url = 'http://ihiweb.test/api/survey/result';
            // var url = 'http://ihi.test/api/survey/offline-result';
            var url = 'http://103.75.190.110/api/senaraiilp/JOHOR';
            console.log(url);

            //


            this.http.get(url)
                .subscribe(data => {
                    this.response = data.json();
                    console.log('aa :',this.response);

                    var status = this.response.saveStatus;
                    var heroes = this.response.data;
                    console.log('bb :' ,heroes);

                    loading.dismiss();

                    this.showAlert('Terima Kasih', 'Terima kasih. Soal selidik anda telah dihantar');

                }, error => {
                    loading.dismiss();
                    this.showAlert('Ralat', 'Gagal menghantar soal selidik ke server');


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


}
