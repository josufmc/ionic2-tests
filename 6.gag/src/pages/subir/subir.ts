import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-subir',
  templateUrl: 'subir.html',
})
export class SubirPage {

  public titulo: string = "";

  constructor(private viewCtrl: ViewController) {
  }

  public cerrarModal(){
    this.viewCtrl.dismiss();
  }

}
