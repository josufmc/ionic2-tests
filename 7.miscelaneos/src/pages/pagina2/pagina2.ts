import { Pagina3Page } from './../pagina3/pagina3';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public irPagina3(){
    this.navCtrl.push(Pagina3Page);
  }

  public ionViewDidLoad(){
    console.log('ionViewDidLoad');
  }

  public ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  public ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  public ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  public ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  public ionViewWillUnload(){
    console.log('ionViewWillUnload');
  }

  public ionViewCanEnter(){
    console.log('ionViewCanEnter');

    let numero = Math.round(Math.random() * 10);
    console.log(numero);
    return numero >= 3;
  }

  public ionViewCanLeave(){
    console.log('ionViewCanLeave');
    console.log('Espere 2 segundos para salir...');
    let promesa = new Promise(
      (resolve, reject)=>{
        setTimeout(
          () => {
            resolve(true);
          },
          2000
        );
      }
    );
    return promesa;
  }

}
