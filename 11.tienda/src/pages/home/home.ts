import { ProductoPage } from './../producto/producto';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductosProvider } from '../../providers/productos/productos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public productosProvider: ProductosProvider) {
    console.log('Cargando: ' + productosProvider.productos);
  }

  siguiente_pagina(infiniteScroll) {
    this.productosProvider.cargar_todos().then(
      () =>{
        infiniteScroll.complete();
      }
    );
  }

  public navegarProducto(item: any){
    this.navCtrl.push(ProductoPage, {item: item});
  }
  
}
