import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SubirPage } from './../subir/subir';

import { CargaarchivoProvider } from './../../providers/cargaarchivo/cargaarchivo';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public hayMas: boolean = true;

  constructor(public navCtrl: NavController, private ModalCtrl: ModalController, public cargaArchivoService: CargaarchivoProvider,
  private authService: AuthServiceProvider) {
    this.cargaArchivoService.cargaImagenes();
  }

  public mostrarModal(){
    let modal = this.ModalCtrl.create(SubirPage);
    modal.present();
  }

  public cargarSiguientes(infiniteScroll: any){
    console.log('siguientes...');
    this.cargaArchivoService.cargaImagenes().then(
      (existenMas: boolean) => {
        infiniteScroll.complete();
        this.hayMas = existenMas;
      }
    );
  }

  public salir(){

  }

  public ingresar(): void {
    this.authService.signInWithFacebook()
      .then(() => this.onSignInSuccess());
  }

  private onSignInSuccess(): void {
    console.log("Facebook display name ",this.authService.displayName());
  }


}
