import { Pagina3Page } from './../pagina3/pagina3';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3:any = Pagina3Page;

  mutantes:any[] = [
    {nombre: 'Magneto', poder: 'Metal'},
    {nombre: 'Wolverine', poder: 'Regeneración'},
    {nombre: 'Profesor X', poder: 'Mente'},
    {nombre: 'Gambito', poder: 'Cartas'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public irPagina3(mutante:any){
    console.log(mutante);
    this.navCtrl.push(Pagina3Page, {'mutante': mutante});
  }

}
