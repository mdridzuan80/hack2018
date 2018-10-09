import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApplicationformPage} from "../applicationform/applicationform";
import {PscychometricPage} from "../pscychometric/pscychometric";

/**
 * Generated class for the SendpsychometricPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sendpsychometric',
  templateUrl: 'sendpsychometric.html',
})
export class SendpsychometricPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendpsychometricPage');
  }

    next(item) {
        this.navCtrl.setRoot(PscychometricPage);
    }

}
