import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SubirPage } from './../pages/subir/subir';

// Pipes
import { PlaceholderPipe } from '../pipes/placeholder/placeholder';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Config
import { firebaseConfig } from './../config/firebase.config';

// Camera
import { ImagePicker } from '@ionic-native/image-picker';
import { CargaarchivoProvider } from '../providers/cargaarchivo/cargaarchivo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SubirPage,
    PlaceholderPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SubirPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    ImagePicker,
    CargaarchivoProvider
  ]
})
export class AppModule {}
