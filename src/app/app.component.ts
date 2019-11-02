import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';


const config = {
  apiKey: 'AIzaSyDwwD_xgPfu_nyu3KEpNLelu3yXNn3gNBU',
  authDomain: 'mugedatabase.firebaseapp.com',
  databaseURL: 'https://mugedatabase.firebaseio.com',
  projectId: 'mugedatabase',
  storageBucket: 'mugedatabase.appspot.com',
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
