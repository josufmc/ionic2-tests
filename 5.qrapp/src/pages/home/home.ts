import { HistorialProvider } from './../../providers/historial/historial';
import { ToastController, Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private scanner:BarcodeScanner, private toastCtrl: ToastController, private platform: Platform, private historialProvider: HistorialProvider) {

  }

  public scan(){
    if (!this.platform.is('cordova')){
       //let cadena:string = 'http://www.google.es';
       let cadena:string = 'geo:43.2630126,-2.9349852000000283';
       this.historialProvider.agregarHistorial(cadena);
       return;
    }
    
    this.scanner.scan().then((barcodeData) => {
      if (!barcodeData.cancelled && barcodeData.text != null){
        this.historialProvider.agregarHistorial(barcodeData.text);
        console.log(barcodeData.text);
      }
    }, (err) => {
      console.error(err);
      this.mostrarError(err);
    });
  }

  mostrarError(msg:string) {
    let toast = this.toastCtrl.create({
      message: 'Error: ' + msg,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
}

}
