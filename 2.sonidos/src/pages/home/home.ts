import { Animal } from './../../interfaces/animal.interface';
import { ANIMALES } from './../../data/data.animales';
import { Component } from '@angular/core';
import { Refresher, reorderArray} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales:Animal[] = [];
  audio = new Audio();
  audioTiempo:any;
  ordenando:boolean = false;

  constructor() {
    this.animales = ANIMALES.slice(0);
  }

  public reproducir(animal:Animal){
    this.pausarAudio(animal);
    if (animal.reproduciendo){
      animal.reproduciendo = false;
      return;
    }

    console.log(animal);
    this.audio.src = animal.audio;
    animal.reproduciendo = true;
    this.audio.load();
    this.audio.play();

    this.audioTiempo = setTimeout( ()=> {animal.reproduciendo = false}, animal.duracion * 1000);
  }


  private pausarAudio(animalSeleccionado:Animal){
    clearTimeout(this.audioTiempo);
    this.audio.pause();
    this.audio.currentTime = 0; // Pasamos al principio del audio
    for(let animal of this.animales){
      if (animal.nombre != animalSeleccionado.nombre){
        animal.reproduciendo = false;
      }
    }
  }

  public borrar(id:number){
    this.animales.splice(id, 1);
  }

  public recargarAnimales(refresher: Refresher){
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.animales = ANIMALES.slice(0);
      refresher.complete();
    }, 500);
  }

  public reordenarAnimales(ids: any){
    console.log(ids);
    this.animales = reorderArray(this.animales, ids);
  }

}
