import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {URL_SERVICIOS} from '../../config/url.servicios'

@Injectable()
export class ProductosProvider {

  pagina = 0;
  public productos: any[] = [];

  constructor(public http: Http) {
    console.log('Hello ProductosProvider Provider');
    this.cargar_todos();
  }

  public cargar_todos(){
    let promesa = new Promise((resolve, reject) =>{
      let url = URL_SERVICIOS + '/productos/todos/' + this.pagina;
      this.http.get(url)
      .map((resp) => resp.json())
      .subscribe(
        (data) => {
          console.log(data);
          if(data.error){

          } else {
            let nuevaData = this.agrupar(data.productos, 2);
            this.productos.push( ...nuevaData);
            this.pagina++;
          }
          resolve();
        }
      );
    });
    return promesa;
  }

  private agrupar(arr: any[], tamano: number){
    let nuevoArr = [];
    for(let i=0; i<arr.length; i+= tamano){
      nuevoArr.push(arr.slice(i, i+tamano));
    }
    console.log(nuevoArr);
    return nuevoArr;
  }

}
