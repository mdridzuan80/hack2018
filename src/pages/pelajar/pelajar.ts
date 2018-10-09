import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ListPage } from "../list/list";
import { BasicPage } from "../navigation/pages";
import {PeopleServiceProvider} from "../../providers/people-service/people-service";
import {ProfilePage} from "../profile/profile";
import {ResultstatusPage} from "../resultstatus/resultstatus";
import {SearchbarPage} from "../searchbar/searchbar";
import {JadualslidesPage} from "../jadualslides/jadualslides";
import {AsramaPage} from "../asrama/asrama";
import {PeperiksaanPage} from "../peperiksaan/peperiksaan";


@Component({
    selector: 'page-pelajar',
    templateUrl: 'pelajar.html'
})
export class PelajarPage {
    selectedItem: any;
    icons: string[];
    items: Array<{title: string, note: string, icon: string, }>;
    users: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public peopleProviders: PeopleServiceProvider) {
        // If we navigated to thispage, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.getUsers();
        // Let's populate this page with some filler content for funzies
        // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
        //     'american-football', 'boat', 'bluetooth', 'build'];
        //
        // this.items = [];
        // for (let i = 1; i < 11; i++) {
        //     this.items.push({
        //         title: 'Item ' + i,
        //         note: 'This is item #' + i,
        //         icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        //     });
        // }
    }


    itemTapped(event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(PelajarPage, {
            item: item
        });
    }
    // showAlert() {
    //     const alert = this.alertCtrl.create({
    //         title: 'New Friend!',
    //         subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
    //         buttons: ['OK']
    //     });
    //     alert.present();
    getUsers() {
        this.peopleProviders.getUsers()
            .then(data => {
                this.users = data;
                console.log(this.users);
            });
    }


    gotoPage() {
        const alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
    }
    // doPrompt() {
    //
    //     let prompt = this.alertCtrl.create({
    //
    //         title: 'Login',
    //
    //         message: "Enter a name for this new album you're so keen on adding",
    //
    //         inputs: [
    //
    //             {
    //
    //                 name: 'title',
    //
    //                 placeholder: 'Title'
    //
    //             },
    //
    //         ],
    //
    //         buttons: [
    //
    //             {
    //
    //                 text: 'Cancel',
    //
    //                 handler: data => {
    //
    //                     console.log('Cancel clicked');
    //
    //                 }
    //
    //             },
    //
    //             {
    //
    //                 text: 'Save',
    //
    //                 handler: data => {
    //
    //                     console.log('Saved clicked');
    //
    //                 }
    //
    //             }
    //
    //         ]
    //
    //     });
    //
    //     prompt.present();
    //
    // }
    showPrompt() {
        const prompt = this.alertCtrl.create({
            title: 'Profile',
            message: "Nama : Mat Saleh",

            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        prompt.present();
    }
goListPage(){
        this.navCtrl.setRoot(ListPage);
}
    goBasicPage(){
        this.navCtrl.setRoot(BasicPage);
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

