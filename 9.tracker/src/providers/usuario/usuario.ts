import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Storage } from '@ionic/storage';


@Injectable()
export class UsuarioProvider {


  clave: string = null;

  constructor(private af: AngularFireDatabase, private storage: Storage, private platform: Platform) {
  }

  public verificaUsuario(clave: string){
    clave = clave.toLowerCase();

    let promesa = new Promise((resolve, reject)=>{
      this.af.list('/usuarios/' + clave).subscribe(
        (data) => {
          console.log(data);
          if (data.length == 0){
            resolve(false);
          } else {
            this.clave = clave;
            this.guardarStorage();
            resolve(true);
          } 
        },
        (error) => {
          console.error(error);
          reject();
        }
      );
    }).catch(
      (error) => {
          console.error(error);
        }
    );

    return promesa;
  }

  public cargarStorage(){
    let promesa = new Promise((resolve, reject) => {
      if (this.platform.is('cordova')){
        this.storage.ready().then(
          () => {
            this.storage.get('clave').then(
              (clave) => {
                if (clave){
                  this.clave = clave;
                }        
                resolve();
              }
            );
          }
        );
      } else {
        let clave = localStorage.getItem('clave');
        if (clave){
          this.clave = JSON.parse(clave);
        }
        resolve();
      }
    });
    return promesa;    
  }


  private guardarStorage(){
    let promesa = new Promise((resolve, reject) => {
      if (this.platform.is('cordova')){
        console.log('Inicializando storage...'); 
        this.storage.ready().then(
          () => {
            console.log('Storage listo'); 
            // Se puede usar promesa, aunque no hace falta 
            this.storage.set('clave', this.clave);
          }
        );
      } else {
        if (this.clave){
          localStorage.setItem('clave', JSON.stringify(this.clave));
        } else {
          localStorage.removeItem('clave');
        }
      }
    });

    return promesa;
  }
}
