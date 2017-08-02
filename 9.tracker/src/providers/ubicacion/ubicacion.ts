import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { UsuarioProvider} from '../usuario/usuario';

@Injectable()
export class UbicacionProvider {

  usuario: FirebaseObjectObservable<any[]>;
  private watch: any;

  constructor(private geolocation: Geolocation, private afDB: AngularFireDatabase, private usuarioProvider: UsuarioProvider) {
    console.log('Hello UbicacionProvider Provider');
    if (!this.usuarioProvider.clave) return;
    this.usuario = this.afDB.object('/usuarios/' + this.usuarioProvider.clave);
  }

  public iniciarLocalizacion(){
    this.watch = this.geolocation.watchPosition()
    .subscribe((data) => {
      if (!this.usuarioProvider.clave) return;
      this.usuario.update({
        lat: data.coords.latitude,
        lng: data.coords.longitude
      });
    });
  }

  public detenerLocalizacion(){
    this.watch.unsubscribe();
    this.usuarioProvider.borrarUsuario();
  }


}
