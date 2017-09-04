import { PorCategoriasPage } from './../por-categorias/por-categorias';
import { ProductosProvider } from './../../providers/productos/productos';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  public porCategoriasPage = PorCategoriasPage;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public productosProvider: ProductosProvider) {
  }

}
