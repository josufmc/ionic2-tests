import { Animal } from './../../interfaces/animal.interface';
import { ANIMALES } from './../../data/data.animales';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales:Animal[] = [];
  audio = new Audio();
  audioTiempo:any;

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

}
