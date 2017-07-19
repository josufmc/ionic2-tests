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
    let promesa = new Promise((resolve, reject) => {
      if (this.platform.is('cordova')){
        this.storage.ready().then(
          () => {
            this.storage.get('ajustes').then(
              (ajustes) => {
                if (ajustes){
                  this.ajustes = ajustes;
                }        
                resolve();
              }
            );
          }
        );
      } else {
        let ajustes = localStorage.getItem('ajustes');
        if (ajustes){
          this.ajustes = JSON.parse(ajustes);
        }
        resolve();
      }
    });
    return promesa;    
  }

  public guardarStorage(){
    if (this.platform.is('cordova')){
      console.log('Inicializando storage...'); 
      this.storage.ready().then(
         () => {
          console.log('Storage listo'); 
          // Se puede usar promesa, aunque no hace falta 
          this.storage.set('ajustes', this.ajustes);
         }
       );
    } else {
      localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    }
  }

}
