import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import {HttpModule} from "@angular/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { StatusPage } from '../pages/status/status';
import { ApplicationformPage } from '../pages/applicationform/applicationform';
import { InfoPage } from '../pages/info/info';
import { ProfilePage } from '../pages/profile/profile';
import { ResultstatusPage } from '../pages/resultstatus/resultstatus';
import { SendPage } from '../pages/send/send';
import { PscychometricPage } from '../pages/pscychometric/pscychometric';
import { RegisterpscychometricPage } from '../pages/registerpscychometric/registerpscychometric';
import { CareerpathPage } from '../pages/careerpath/careerpath';
import { JobsmalaysiaPage } from '../pages/jobsmalaysia/jobsmalaysia';
import { SearchbarPage } from '../pages/searchbar/searchbar';
import { JadualslidesPage } from '../pages/jadualslides/jadualslides';
import { AsramaPage } from '../pages/asrama/asrama';
import { PeperiksaanPage } from '../pages/peperiksaan/peperiksaan';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {DashboardPage} from "../pages/dashboard/dashboard";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
      LoginPage,
      StatusPage,
      ApplicationformPage,
      InfoPage,
      ProfilePage,
      ResultstatusPage,
      SendPage,
      PscychometricPage,
      RegisterpscychometricPage,
      CareerpathPage,
      JobsmalaysiaPage,
      DashboardPage,
      SearchbarPage,
      JadualslidesPage,
      AsramaPage,
      PeperiksaanPage
  ],
  imports: [
      BrowserModule,
      IonicModule.forRoot(MyApp),
      IonicStorageModule.forRoot(),
      HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
      LoginPage,
      StatusPage,
      ApplicationformPage,
      InfoPage,
      ProfilePage,
      ResultstatusPage,
      SendPage,
      PscychometricPage,
      RegisterpscychometricPage,
      CareerpathPage,
      JobsmalaysiaPage,
      DashboardPage,
      SearchbarPage,
      JadualslidesPage,
      AsramaPage,
      PeperiksaanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
