import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Pagina2Page } from './../pages/pagina2/pagina2';
import { Pagina3Page } from './../pages/pagina3/pagina3';
import { IntroduccionPage } from './../pages/introduccion/introduccion';
import { AjustesProvider } from '../providers/ajustes/ajustes';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Pagina2Page,
    Pagina3Page,
    IntroduccionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Pagina2Page,
    Pagina3Page,
    IntroduccionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AjustesProvider
  ]
})
export class AppModule {}
