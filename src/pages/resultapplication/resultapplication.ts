import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SendPage} from "../send/send";

/**
 * Generated class for the ResultapplicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultapplication',
  templateUrl: 'resultapplication.html',
})
export class ResultapplicationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultapplicationPage');
  }

    next() {
        this.navCtrl.push(SendPage);
    }

}
