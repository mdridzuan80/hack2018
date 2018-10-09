import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import {ListilpPage} from "../listilp/listilp";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
    public answer:string = '';
    surveyResult: any = [];
    language:string = 'wakanda forever';
    employer_code:string;
    employer_id: number;
    employer_name: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListPage');

        //paparkan kandungan employer_code
        this.storage.get('employer_code').then(value => {
            console.log('Employer Code:', value);
        });

        //untuk soalan pertama sahaja, kita nak reset set jawapan
        this.storage.ready().then(() => {
            this.storage.set('surveyResult', []);
        });
    }

    back() {
        // this.navCtrl.pop();
        this.storage.get('surveyResult').then(value => {
            this.surveyResult = value;

            //keluarkan dari array
            this.surveyResult.pop();

            //simpan balik ke dalam storage
            this.storage.set('surveyResult', this.surveyResult);

            //go to next page
            this.navCtrl.pop();
        });
    }

    next() {
        // alert(this.answer);
        // this.navCtrl.push(Ma12Page);

        //create object data kita
        var data = {
            "jawapan": this.answer
        };

        //tarik data yang sedia ada dalam storage
        this.storage.get('surveyResult').then(value => {
            this.surveyResult = value;

            //insert masuk object data baru ke dalam array
            this.surveyResult.push(data);

            //simpan balik ke dalam storage
            this.storage.set('surveyResult', this.surveyResult).then(() => {
                //go to next page
                this.navCtrl.push(ListilpPage);
            });
        });

    }

}

