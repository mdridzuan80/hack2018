import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
// import { Storage } from "@ionic/storage";
// import { Http } from "@angular/http";
import { PeopleServiceProvider } from '../../providers/people-service/people-service';


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
  //
  //
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad PeperiksaanPage');
  // }
  //   send() {
  //       //show loading spinner
  //       // const loading = this.loadingCtrl.create({
  //       //     content: 'Please wait..'
  //       // });
  //       // loading.present();
  //
  //       //fetch data dari storage
  //       console.log('fetch data from storage');
  //       //tarik data sedia ada dalam storage
  //       this.storage.get('offlineResult').then(value => {
  //           this.offlineResults = value;
  //           //
  //           //   //sent to server
  //           console.log('try to send data to server');
  //           //
  //           // var url = 'http://iotg.mohr.favotechsystem.com/api/survey/result';
  //           // var url = 'http://103.75.190.110/api/pelajar';
  //           var url = 'https://www.reddit.com/r/gifs/top/.json?limit=10&sort=hot';
  //           // var url = 'http://ihiweb.test/api/survey/result';
  //
  //           //
  //           var sendData = {
  //               "resultData": this.offlineResults,
  //               // "category": "employer"
  //           };
  //
  //           this.http.post(url, sendData)
  //               .subscribe(data => {
  //                   this.response = data.json();
  //                   console.log(this.response);
  //
  //                   var status = this.response.saveStatus;
  //
  //                   // loading.dismiss();
  //
  //                   if (status == 'pass') {
  //                       //clearkan
  //                       this.storage.set('offlineResult', []).then(() => {
  //
  //                       });
  //                   }
  //               })
  //       })
  //       this.posts = null;
  //
  //       this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=2&sort=hot').map(res => res.json()).subscribe(data => {
  //           this.posts = data.data.children;
  //       });
  //
  //       console.log(this.posts);
  //   }

