import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import * as firebase from 'firebase';


@Injectable()
export class CargaarchivoProvider {
  
  private CARPETA_IMAGENES: string = "img";
  private POSTS: string = "post";

  private imagenes: any[] = [];
  private lastKey: string = undefined;
  
  public constructor(private af: AngularFireDatabase, private toastCtrl : ToastController){

  }

  public cargarImagenesFirebase(archivo: ArchivoSubir){
    let promesa = new Promise((resolve, reject)=>{
      this.mostrarToast('Inicio de carga...');
      let storageRef = firebase.storage().ref();
      // Unique name prefix
      let nombreArchivo = new Date().valueOf();

      // Uploading to firebase storage
      let uploadTask :firebase.storage.UploadTask = storageRef.child(`${this.CARPETA_IMAGENES}/${nombreArchivo}`)
      .putString(archivo.img, 'base64', {contentType: 'image/jpeg'});

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {},  // Progress event
        (error) => {  // On error
          console.error("Error al subir", JSON.stringify(error));
          this.mostrarToast("Error al cargar: " + error);
          reject(error);
        },
        () => {   // On complete
            // Obtaining generated url
            let url = uploadTask.snapshot.downloadURL;
            this.mostrarToast('Imagen cargada');
            this.crearPost(archivo.titulo, url);
            resolve();
        }
      );

    });

    return promesa;
  }

  private crearPost(titulo: string, url: string){
    let post: ArchivoSubir = {
      img : url,
      titulo: titulo
    };
    // Uploading post to firebase
    let $key = this.af.list(`/${ this.POSTS }`).push(post).key;
    post.$key = $key;
    this.imagenes.push(post);
  }

  private mostrarToast(msg: string){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2500
    });
    toast.present(); 
  }

  public cargaImagenes(){
    let promesa = new Promise((resolve, reject) => {
      this.af.list(`/${ this.POSTS }`, {
        query: {
          limitToLast: 4,
          orderByKey: true,
          endAt: this.lastKey
        }
      }).subscribe(
        posts => {
          // La última clave, viene repetida. La quitamos
          if (this.lastKey){
            posts.pop();
          }
          if (posts.length == 0){
            console.log('Ya no quedan registros');
            resolve(false);
            return;
          }
          this.lastKey = posts[0].$key;

          for (let i = posts.length -1; i >= 0; i--){
            let post = posts[i];
            this.imagenes.push(post);
          }
          resolve(true);
        }
      );
    });
    return promesa;
  }

}


interface ArchivoSubir {
  $key?: string;
  img: string;
  titulo: string;
}