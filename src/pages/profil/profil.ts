import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';


/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
    users: any;
    constructor(public navCtrl: NavController, public peopleProviders: PeopleServiceProvider) {
        this.getUsers();
    }
    getUsers() {
        this.peopleProviders.getUsers()
            .then(data => {
                this.users = data;
                console.log(this.users);
            });
    }
}