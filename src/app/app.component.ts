import { Component, DoCheck, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  public selectedIndex = 0;

  public appPages = [
    {
      title: 'Home',
      url: '/tabs/tab1',
      icon: 'home'
    },
    {
      title: 'Gallery',
      url: '/tabs/tab2',
      icon: 'image'
    },
    {
      title: 'Contact',
      url: '/tabs/tab3',
      icon: 'mail'
    },
    {
      title: 'Profil',
      url: '/tabs/tab4',
      icon: 'person'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  ngOnInit() {
    const path = window.location.pathname;
    console.log('ngOnInit path :',path);
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.url);
    }}

    ngDoCheck() {
      this.checkSelected();
    }

    checkSelected(){
      const path = window.location.pathname;
      console.log('checkSelected path :',path);
      if (path !== undefined) {
        this.selectedIndex = this.appPages.findIndex(page => page.url);
    }};
}
