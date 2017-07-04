import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
// Páginas
import { TabsPage, GuardadosPage, HomePage, MapaPage } from '../pages/index.paginas';
// Servicios
import { HistorialProvider } from '../providers/historial/historial';
// Plugins
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';
import { AgmCoreModule } from '@agm/core';
import { EmailComposer } from '@ionic-native/email-composer';

@NgModule({
  declarations: [
    MyApp,
    TabsPage, GuardadosPage, HomePage, MapaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcnUtoSed-P4zzs14JQsNQ8cuMIGGbh5w'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage, GuardadosPage, HomePage, MapaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    InAppBrowser,
    HistorialProvider,
    Contacts,
    EmailComposer
  ]
})
export class AppModule {}
