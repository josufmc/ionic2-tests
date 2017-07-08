import { Component } from '@angular/core';
import { ViewController, ToastController, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';

@Component({
  selector: 'page-subir',
  templateUrl: 'subir.html',
})
export class SubirPage {

  public titulo: string = "";
  public imgPreview: string = null;
  public img: string = null;

  constructor(private viewCtrl: ViewController, private camera: Camera, private toastCtrl : ToastController,
    private platform: Platform, private imagePicker: ImagePicker ) {
  }

  public cerrarModal(){
    this.viewCtrl.dismiss();
  }

  public mostrarCamara(){
    if (! this.platform.is('cordova')){
      this.mostrarToast('No estamos en un móvil');
      return;
    }
    
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imgPreview = base64Image;
      this.img = imageData;
    }, (err) => {
      this.mostrarToast('Error: ' + err);
      console.error('Error camara: ', err);
    });
  }

  private mostrarToast(msg: string){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2500
    });
    toast.present(); 
  }

  private seleccionarFoto(){
    if (! this.platform.is('cordova')){
      this.mostrarToast('No estamos en un móvil');
      return;
    }

    let options: ImagePickerOptions = {
      outputType: 1,  // base64, o = URI
      maximumImagesCount: 1,
      quality: 40
    };
    
    this.imagePicker.getPictures(options).then((results) => {
      for (let img of results){
        this.imgPreview = 'data:image/jpeg;base64,' + img;
        this.img = img;
        break;  // Sólo la primera
      }
    }, (err) => { 
      this.mostrarToast('Error: ' + err);
      console.error(JSON.stringify(err));
    });
  }



}
