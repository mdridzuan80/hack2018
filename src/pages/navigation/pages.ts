import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import { Storage } from "@ionic/storage";


@Component({
    templateUrl: 'navigation-details.html',
})
export class NavigationDetailsPage {
    item;

    constructor(params: NavParams) {
        this.item = params.data.item;
    }
}

@Component({
    template: `
<ion-header>
  <ion-navbar>
    <ion-title>PROFIL PELAJAR</ion-title>
      <button ion-button icon-end secondary menuToggle></button>

  </ion-navbar>
</ion-header>

<ion-content>
  <ion-list>
    <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item)" icon-start>
      <ion-icon [name]="'logo-' + item.icon" [ngStyle]="{'color': item.color}" item-start></ion-icon>
      {{ item.title }}
    </button>
  </ion-list>
</ion-content>
`
})
export class BasicPage {
    items = [];
    offlineResults: any = [];
    response: any = '';

    constructor(public nav: NavController, public storage: Storage,
                public http: Http
    ) {
        this.items = [
            {
                'title': 'Profil',
                'icon': 'angular',
                'description': 'Nama: Zawawi' + '' + 'NDP: test' + 'IC: test',
            },
            {
                'title': 'Peperiksaan',
                'icon': 'javascript',
                'description': '<ion-content></ion-content>',
                'color': '#0CA9EA'
            },
            {
                'title': 'Perpustakaan',
                'icon': 'html5',
                'description': 'The latest version of the web\'s markup language.',
                'color': '#F46529'
            },
            {
                'title': 'Asrama',
                'icon': 'javascript',
                'description': 'One of the most popular programming languages on the Web!',
                'color': '#FFD439'
            },
            {
                'title': 'Jadual Kelas',
                'icon': 'sass',
                'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
                'color': '#CE6296'
            },

        ]
        this.storage.get('offlineResult').then(value => {
            console.log(value);
            this.offlineResults = value;
            console.log(this.offlineResults);
        });
    }

    openNavDetailsPage(item) {
        this.nav.push(NavigationDetailsPage, {item: item});
    }

    send() {
        //show loading spinner
        // const loading = this.loadingCtrl.create({
        //     content: 'Please wait..'
        // });
        // loading.present();

        //fetch data dari storage
        console.log('fetch data from storage');
        //tarik data sedia ada dalam storage
        this.storage.get('offlineResult').then(value => {
            this.offlineResults = value;
            //
            //   //sent to server
            console.log('try to send data to server');
            //
            // var url = 'http://iotg.mohr.favotechsystem.com/api/survey/result';
            var url = 'http://103.75.190.110/api/pelajar';
            // var url = 'http://ihiweb.test/api/survey/result';

            //
            var sendData = {
                "resultSurvey": this.offlineResults,
                // "category": "employer"
            };

            this.http.post(url, sendData)
                .subscribe(data => {
                    this.response = data.json();
                    console.log(this.response);

                    var status = this.response.saveStatus;

                    // loading.dismiss();

                    if (status == 'pass') {
                        //clearkan
                        this.storage.set('offlineResult', []).then(() => {

                        });
                    }
                })
        })
    }
}

