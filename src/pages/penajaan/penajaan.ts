import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import {ResultstatusPage} from "../resultstatus/resultstatus";
import {SearchbarPage} from "../searchbar/searchbar";
import {JadualslidesPage} from "../jadualslides/jadualslides";
import {AsramaPage} from "../asrama/asrama";
import {PeperiksaanPage} from "../peperiksaan/peperiksaan";

/**
 * Generated class for the PenajaanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-penajaan',
  templateUrl: 'penajaan.html',
})
export class PenajaanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PenajaanPage');
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
