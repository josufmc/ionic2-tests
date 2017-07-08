import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SubirPage } from './../subir/subir';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, private ModalCtrl: ModalController, private af: AngularFireDatabase) {
    this.posts = af.list('/post');
  }

  public mostrarModal(){
    let modal = this.ModalCtrl.create(SubirPage);
    modal.present();
  }

}
