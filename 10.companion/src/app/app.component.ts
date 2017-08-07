import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  lat = 51.678418;
  lng = 7.809007;

  taxistas: any[] = [];
  taxistaSeleccionado: any = {};
  siguiendo = false;

  constructor(private afDB: AngularFireDatabase) {
    afDB.list('/usuarios').subscribe(
      (taxistas) => {
        this.taxistas = taxistas;
        if (this.siguiendo) {
          for (const taxista of taxistas){
            if (taxista.$key === this.taxistaSeleccionado.$key) {
              this.lat = taxista.lat;
              this.lng = taxista.lng;
            }
          }
        }
      }
    );
  }

  public seguirTaxista(taxista: any) {
    this.lat = taxista.lat;
    this.lng = taxista.lng;
    this.taxistaSeleccionado = taxista;
    this.siguiendo = true;
    console.log(taxista);
  }

  public dejarSeguir() {
    this.siguiendo = false;
    this.taxistaSeleccionado = {};
  }
}
