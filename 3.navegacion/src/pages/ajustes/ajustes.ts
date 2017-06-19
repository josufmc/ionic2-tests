import { ModalPage } from './../modal/modal';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public modalCtrl:ModalController, public navParams: NavParams) {
  }

  public activarPrincipal(){
    this.navCtrl.parent.select(0);
  }
  public mostrarModal(){
    let modal = this.modalCtrl.create(ModalPage, {nombre:'Fernando', edad:30});
    modal.present();
    modal.onDidDismiss(parametros => {
      if (parametros) console.log(parametros);
    })
  }
}
