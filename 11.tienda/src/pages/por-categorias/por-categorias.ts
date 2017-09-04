import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-por-categorias',
  templateUrl: 'por-categorias.html',
})
export class PorCategoriasPage {

  private categoria;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categoria = this.navParams.get('categoria');
    console.log(this.categoria);
  }

}
