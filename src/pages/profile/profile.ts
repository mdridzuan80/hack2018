import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterpscychometricPage} from "../registerpscychometric/registerpscychometric";
import {CareerpathPage} from "../careerpath/careerpath";
import {JobsmalaysiaPage} from "../jobsmalaysia/jobsmalaysia";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}
