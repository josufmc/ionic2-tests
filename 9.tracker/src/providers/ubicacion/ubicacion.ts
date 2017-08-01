import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { UsuarioProvider} from '../usuario/usuario';

@Injectable()
export class UbicacionProvider {

  usuario: FirebaseObjectObservable<any[]>;

  constructor(private geolocation: Geolocation, private afDB: AngularFireDatabase, private usuarioProvider: UsuarioProvider) {
    console.log('Hello UbicacionProvider Provider');
    this.usuario = this.afDB.object('/usuarios/' + this.usuarioProvider.clave);
  }

  public iniciarLocalizacion(){
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.usuario.update({
        lat: data.coords.latitude,
        lng: data.coords.longitude
      });
    });
  }

}
