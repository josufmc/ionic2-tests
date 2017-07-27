import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { ViewChild, AfterViewInit } from '@angular/core';
import { Slides } from 'ionic-angular';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { HomePage } from './../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements AfterViewInit {

  clave: string = 'passw';

  ngAfterViewInit(): void {
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;
    this.slides.paginationType = "progress";  // Barra de progreso
  }

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, 
    private loadingCtrl: LoadingController, 
    private alertCtrl: AlertController, 
    private usuarioService: UsuarioProvider) {
  }

  public continuar(){
    let loading = this.loadingCtrl.create({
      content: 'Espere, por favor...'
    });
    loading.present();
    
    this.usuarioService.verificaUsuario(this.clave).then(
      (valido) => {
        loading.dismiss();
        if(valido){
          this.slides.lockSwipes(false);
          this.slides.slideNext();
          this.slides.lockSwipes(true);
        } else {
          this.alertCtrl.create({
            title: 'Clave no es correcta',
            subTitle: 'Verifique su clave o hable con el administrador',
            buttons: ['OK']
          })
          .present();
        }
      }
    ).catch(
      (error) => {
        loading.dismiss();
        console.log('Error: ' + JSON.stringify(error));
      }
    );
  }

  public ingresar(){
    this.navCtrl.setRoot(HomePage);
  }

}
