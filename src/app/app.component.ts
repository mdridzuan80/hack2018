import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { StatusPage } from '../pages/status/status';
import { ApplicationformPage } from '../pages/applicationform/applicationform';
import { InfoPage } from '../pages/info/info';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {PscychometricPage} from "../pages/pscychometric/pscychometric";
import {DashboardPage} from "../pages/dashboard/dashboard";
import {SearchbarPage} from "../pages/searchbar/searchbar";
import { JadualslidesPage } from '../pages/jadualslides/jadualslides'
import { AsramaPage } from '../pages/asrama/asrama'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = HomePage; -- cth
  // rootPage: any = LoginPage; --betul
  // rootPage: any = LoginPage;
  rootPage: any = DashboardPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
        { title: 'Borang Permohonan', component: ApplicationformPage },
        { title: 'Semak Status Permohonan', component: StatusPage },
      { title: 'Senarai ILP', component: ListPage },
        { title: 'Ujian Psikometrik', component: PscychometricPage },
        { title: 'Info', component: InfoPage },
        // { title: 'Dashboard', component: DashboardPage }
        { title: 'AsramaPage', component: AsramaPage }


    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
