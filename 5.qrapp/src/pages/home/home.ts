import { ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private scanner:BarcodeScanner, private toastCtrl: ToastController) {

  }

  public scan(){
    this.scanner.scan().then((barcodeData) => {
      console.log(barcodeData);
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
