import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { AdminPage } from '../pages/admin/admin';
import { FamilyPage } from '../pages/family/family';

import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';

import { ContactPage } from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { KidServicesProvider } from '../providers/kid-services/kid-services';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { FCM } from '@ionic-native/fcm';

import { SingleShowPage } from '../pages/single-show/single-show';
import { ShowPage } from '../pages/show/show';
import { AddNewPage } from '../pages/add-new/add-new';



export const fireconfig = {
  apiKey: "AIzaSyDW-y5lSGZ9-e8uAUOkLAGHn3EoCJPqwOI",
  authDomain: "kids-96218.firebaseapp.com",
  databaseURL: "https://kids-96218.firebaseio.com",
  projectId: "kids-96218",
  storageBucket: "kids-96218.appspot.com",
  messagingSenderId: "485707391906"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    FamilyPage,
    AdminPage,
    LoginPage,
    SignUpPage,
    ContactPage,
    SingleShowPage,
    ShowPage,
    AddNewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireconfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    FamilyPage,
    AdminPage,
    LoginPage,
    SignUpPage,
    ContactPage,
    SingleShowPage,
    ShowPage,
    AddNewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KidServicesProvider,
    AuthServiceProvider,
    AngularFireAuth,
    FCM,
    LocalNotifications
  ]
})
export class AppModule {}
