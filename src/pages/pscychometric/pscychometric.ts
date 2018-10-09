import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterpscychometricPage} from "../registerpscychometric/registerpscychometric";

/**
 * Generated class for the PscychometricPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pscychometric',
  templateUrl: 'pscychometric.html',
})
export class PscychometricPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PscychometricPage');
  }

    next() {
        this.navCtrl.push(RegisterpscychometricPage);
    }

}
