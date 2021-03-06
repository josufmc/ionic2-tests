import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import {TabsPage, Pagina3Page, Pagina2Page, 
  ModalPage, Ajustes2Page, AjustesPage, PrincipalPage} from '../pages/index.paginas';

@NgModule({
  declarations: [
    MyApp,
    TabsPage, Pagina3Page, Pagina2Page, ModalPage, Ajustes2Page, AjustesPage, PrincipalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'Atrás'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage, Pagina3Page, Pagina2Page, ModalPage, Ajustes2Page, AjustesPage, PrincipalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
