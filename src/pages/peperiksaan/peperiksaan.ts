import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
// import { Storage } from "@ionic/storage";
// import { Http } from "@angular/http";
// import { PeopleServiceProvider } from '../../providers/people-service/people-service';
import {ProfilePage} from "../profile/profile";
// import {ResultstatusPage} from "../resultstatus/resultstatus";
import {SearchbarPage} from "../searchbar/searchbar";
import {JadualslidesPage} from "../jadualslides/jadualslides";
import {AsramaPage} from "../asrama/asrama";


/**
 * Generated class for the PeperiksaanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-peperiksaan',
  templateUrl: 'peperiksaan.html',
})
export class PeperiksaanPage {
    users: any;
    constructor(public navCtrl: NavController) {
        // this.getUsers();
    }
    // getUsers() {
    //     this.peopleProviders.getUsers()
    //         .then(data => {
    //             this.users = data;
    //             console.log(this.users);
    //         });
    // }
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
