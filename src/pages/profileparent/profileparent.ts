import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PeperiksaanPage} from "../peperiksaan/peperiksaan";
import {SearchbarPage} from "../searchbar/searchbar";
import {JadualslidesPage} from "../jadualslides/jadualslides";
import {AsramaPage} from "../asrama/asrama";
import {ProfilePage} from "../profile/profile";

/**
 * Generated class for the ProfileparentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profileparent',
  templateUrl: 'profileparent.html',
})
export class ProfileparentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileparentPage');
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
