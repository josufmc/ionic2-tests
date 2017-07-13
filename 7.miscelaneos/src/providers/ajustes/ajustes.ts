import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';


@Injectable()
export class AjustesProvider {

  public ajustes = {
    mostrarTutorial: true
  };

  constructor(private storage: Storage, private platform: Platform) {
    console.log('Hello AjustesProvider Provider');
  }

  public cargarStorage(){
    if (this.platform.is('cordova')){

    } else {
      let ajustes = localStorage.getItem('ajustes');
      if (ajustes){
        this.ajustes = JSON.parse(ajustes);
      }
    }
  }

  public guardarStorage(){
    if (this.platform.is('cordova')){

    } else {
      localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    }
  }

}
