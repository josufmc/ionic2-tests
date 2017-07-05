import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SubirPage } from './../subir/subir';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private ModalCtrl: ModalController) {

  }

  public mostrarModal(){
    let modal = this.ModalCtrl.create(SubirPage);
    modal.present();
  }

}
