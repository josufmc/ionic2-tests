import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  lat: number;
  lng: number;

  constructor(public navParams: NavParams, private viewCtrl:ViewController) {
    // this.lat = 43.2630126;
    // this.lng = -2.9349852000000283;
    let coordsStr: string = this.navParams.get("coords");
    coordsStr = coordsStr.replace('geo:', '');
    let coordsArray:string[] = coordsStr.split(',');
    this.lat = parseFloat(coordsArray[0]);
    this.lng = parseFloat(coordsArray[1]);
    console.log(coordsStr);
  }

  public cerrarModal(){
    this.viewCtrl.dismiss();
  }

}
