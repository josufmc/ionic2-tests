import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  public nombre:string;
  public edad:number;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
    this.nombre = this.navParams.get("nombre");
    this.edad = this.navParams.get("edad");
    console.log(this.nombre);
  }

  public cerrarConParametros(){
    let data = {nombre:'JuanCarlos', edad:18};
    this.viewCtrl.dismiss(data);
  }

  public cerrarSinParametros(){
    this.viewCtrl.dismiss();
  }

}
