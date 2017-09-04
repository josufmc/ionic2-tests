import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { CarritoProvider, ProductosProvider, UsuarioProvider } from '../providers/index.services';

import { ImagenPipe } from './../pipes/imagen/imagen';
import { CarritoPage, CategoriasPage, HomePage, LoginPage, 
  OrdenesDetallePage, OrdenesPage, TabsPage, ProductoPage,
  PorCategoriasPage } from '../pages/index.paginas';

@NgModule({
  declarations: [
    MyApp,
    CarritoPage, CategoriasPage, HomePage, LoginPage, 
    OrdenesDetallePage, OrdenesPage, TabsPage, ProductoPage,
    PorCategoriasPage,
    ImagenPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CarritoPage, CategoriasPage, HomePage, LoginPage, 
    OrdenesDetallePage, OrdenesPage, TabsPage, ProductoPage,
    PorCategoriasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarritoProvider,
    ProductosProvider,
    UsuarioProvider
  ]
})
export class AppModule {}
