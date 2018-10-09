import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';


/**
 * Generated class for the NewuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newuser',
  templateUrl: 'newuser.html',
})
export class NewuserPage {
    user = { NDP: '', NAMA: '', NO_KP: '', INSTITUT: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleProviders: PeopleServiceProvider) {
  }
    saveUser() {
        this.peopleProviders.saveUser(this.user).then((result) => {
            console.log(result);
        }, (err) => {
            console.log(err);
        });
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewuserPage');
  }

}
