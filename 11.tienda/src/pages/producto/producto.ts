import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {

  private item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
    console.log(this.item);
  }

}
