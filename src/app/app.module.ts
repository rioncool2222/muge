import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDwwD_xgPfu_nyu3KEpNLelu3yXNn3gNBU",
    authDomain: "mugedatabase.firebaseapp.com",
    databaseURL: "https://mugedatabase.firebaseio.com",
    projectId: "mugedatabase",
    storageBucket: "mugedatabase.appspot.com",
    messagingSenderId: "1084740308520"
  }
 };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment), 
    AngularFireAuthModule, 
    AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
