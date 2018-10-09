import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController } from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import {ResultstatusPage} from "../resultstatus/resultstatus";
import {SearchbarPage} from "../searchbar/searchbar";
import {AsramaPage} from "../asrama/asrama";
import {PeperiksaanPage} from "../peperiksaan/peperiksaan";
// import {AsramaPage} from "../asrama/asrama";

/**
 * Generated class for the JadualslidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-jadualslides',
  templateUrl: 'jadualslides.html',
})
export class JadualslidesPage {
    constructor(public navCtrl: NavController, public alerCtrl: AlertController) { }

    doAlertone() {
        const alert = this.alerCtrl.create({
            title: 'Fundamental of Network',
            message: 'Dewan Kuliah 2',
            // message: 'Dewan Kuliah 2 (9.30 am - 11.00 am)',
            buttons: ['OK']
        });
        alert.present();
    }

    doAlerttwo() {
        let alert = this.alerCtrl.create({
            title: 'Network Maintenance',
            message: 'Dewan Kuliah 1',
            // message: '',
            buttons: ['Ok']
        });
        alert.present()
    }
    doAlertthree() {
        let alert = this.alerCtrl.create({
            title: '<ion-content> <p align="center">Network Cable</ion-content>',
            message: '<ion-content> <p align="center">Dewan Serbaguna </ion-content>',
            // message: '',
            buttons: ['Ok']
        });
        alert.present()
    }
    doAlertfour() {
        let alert = this.alerCtrl.create({
            title: 'Mobile Maintenance',
            message: 'Dewan Kuliah 3',
            // message: '',
            buttons: ['Ok']
        });
        alert.present()
    }
    doAlertfive() {
        let alert = this.alerCtrl.create({
            title: 'Computer Application',
            message: 'Bilik Tutorial',
            // message: '',
            buttons: ['Ok']
        });
        alert.present()
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