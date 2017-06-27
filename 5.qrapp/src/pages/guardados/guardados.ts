import { ScanData } from './../../models/scandata.model';
import { HistorialProvider } from './../../providers/historial/historial';
import { Component } from '@angular/core';

@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html'
})
export class GuardadosPage {

  public historial:ScanData[] = [];

  constructor(private historialProvider:HistorialProvider) {
  }

  ionViewDidEnter() {
    this.historial = this.historialProvider.cargarHistorial();
  }


  public abrirScan(index:number){
    this.historialProvider.abrirScan(index);
  }
}
