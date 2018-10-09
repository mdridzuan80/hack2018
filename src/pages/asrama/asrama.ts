import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
// import { PeopleServiceProvider } from '../../providers/people-service/people-service';
import {ResultstatusPage} from "../resultstatus/resultstatus";
import {SearchbarPage} from "../searchbar/searchbar";
import {JadualslidesPage} from "../jadualslides/jadualslides";
import {ProfilePage} from "../profile/profile";
import {PeperiksaanPage} from "../peperiksaan/peperiksaan";


/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asrama',
  templateUrl: 'asrama.html',
})
export class AsramaPage{
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