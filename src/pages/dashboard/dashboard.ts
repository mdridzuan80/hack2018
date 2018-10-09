import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NavigationDetailsPage} from "../navigation/pages";
import {StatusPage} from "../status/status";
import {setRootDomAdapter} from "@angular/platform-browser/src/dom/dom_adapter";
import {LoginPage} from "../login/login";

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
    openStatusPage(item) {
        this.navCtrl.setRoot(StatusPage);
    }

    openLoginPage(item) {
        this.navCtrl.setRoot(LoginPage);
    }
}
