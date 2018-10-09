import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ResultstatusPage} from "../resultstatus/resultstatus";
import {ResultapplicationPage} from "../resultapplication/resultapplication";

/**
 * Generated class for the ApplicationformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-applicationform',
  templateUrl: 'applicationform.html',
})
export class ApplicationformPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplicationformPage');
  }

    resultApplication() {
        this.navCtrl.push(ResultapplicationPage);
    }

}
