import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// Páginas
import { TabsPage, GuardadosPage, HomePage, MapaPage } from '../pages/index.paginas';
// Servicios
import { HistorialProvider } from '../providers/historial/historial';

@NgModule({
  declarations: [
    MyApp,
    TabsPage, GuardadosPage, HomePage, MapaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    HistorialProvider
  ]
})
export class AppModule {}
