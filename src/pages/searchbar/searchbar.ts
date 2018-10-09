import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ResultstatusPage} from "../resultstatus/resultstatus";
import {JadualslidesPage} from "../jadualslides/jadualslides";
import {AsramaPage} from "../asrama/asrama";
import {ProfilePage} from "../profile/profile";
import {PeperiksaanPage} from "../peperiksaan/peperiksaan";

/**
 * Generated class for the SearchbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-searchbar',
  templateUrl: 'searchbar.html',
})

    export class SearchbarPage {
    items;

    constructor(public navCtrl: NavController, public alerCtrl: AlertController) {
        this.initializeItems();
    }

    initializeItems() {
        this.items = [
            'Amsterdam',
            'Bogota',
            'Buenos Aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima',
            'London',
            'Los Angeles',
            'Madrid',
            'Manila',
            'New York',
            'Olympia',
            'Oslo',
            'Panama City',
            'Peking',
            'Philadelphia',
            'San Francisco',
            'Seoul',
            'Taipeh',
            'Tel Aviv',
            'Tokio',
            'Uelzen',
            'Washington'
        ];
    }

    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the ev target
        var val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
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