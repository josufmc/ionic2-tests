import { ScanData } from './../../models/scandata.model';
import { Injectable } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class HistorialProvider {
  private historial:ScanData[] = [];
  private static readonly FIRST_POSITION:number = 0;
  
  constructor(private iab: InAppBrowser) { }

  public cargarHistorial(){
    return this.historial;
  }

  public agregarHistorial(texto:string){
    let data = new ScanData(texto);
    this.historial.unshift(data);
    console.log(this.historial);
    this.abrirScan(HistorialProvider.FIRST_POSITION);
  }

  public abrirScan(index:number){
    let scanData = this.historial[index];
    if (scanData.tipo == 'http'){
      this.navegar(scanData.info);
    }
  }

  private navegar(url:string){
    const browser = this.iab.create(url);
    browser.show();
  }
}
