import { MapaPage } from './../../pages/mapa/mapa';
import { ScanData } from './../../models/scandata.model';
import { Injectable } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ModalController, Platform, ToastController } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { EmailComposer } from '@ionic-native/email-composer';

@Injectable()
export class HistorialProvider {
  private historial:ScanData[] = [];
  private static readonly FIRST_POSITION:number = 0;
  
  constructor(private iab: InAppBrowser, private modalCtrl: ModalController, private contacts: Contacts, private platform: Platform, private toastCtrl :ToastController,
  private emailComposer: EmailComposer) { }

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
    } else if (scanData.tipo == 'geo'){
      this.mapa(scanData.info);
    } else if (scanData.tipo == 'vcard'){
      this.contacto(scanData.info);
    } else if (scanData.tipo == 'mail'){
      this.mail(scanData.info);
    }
  }

  private navegar(url:string){
    const browser = this.iab.create(url);
    browser.show();
  }

  private mapa(coordenadas:string){
    let modal = this.modalCtrl.create(MapaPage, {coords: coordenadas});
    modal.present();
  }

  private contacto(vcard:string){
    let campos:any = this.parse_vcard(vcard);
    console.log(campos);
    let nombre = campos.fn;
    let tel = campos.tel[0].value[0];

    if (!this.platform.is('cordova')) {
      console.log('En el ordenador...');
      return;
    }


    let contact: Contact = this.contacts.create();
    contact.name = new ContactName(null, nombre);
    contact.phoneNumbers = [new ContactField('mobile', tel)];
    contact.save().then(
      () => {
        this.crearToast('Contacto ' + nombre + ' creado!');
      },
      (error: any) => {
        this.crearToast('Error: ' + error);
      }
    );
  }

  private mail(mail:string){
    let message: any = this.parse_mail(mail);
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
       //
      }
    });

    let email = {
      to: message['TO'],
      subject: message['SUB'],
      body: message['BODY'],
      isHtml: true
    };
    // Send a text message using default options
    this.emailComposer.open(email);
  }

  private parse_mail( input:string ) {
    let msg: string = input.replace('MATMSG:', '');
    let msgparts = msg.split(';');
    let message = {};
    for (let i=0; i< msgparts.length; i++){
      let element = msgparts[i];
      let keyValuePair: string[] = element.split(':');
      if (keyValuePair.length != 2) continue;

      let index: string = keyValuePair[0];
      let value: string = keyValuePair[1];
      message[index] = value;
    }
    return message;
  }

  private crearToast(msg: string){
    this.toastCtrl.create({
      message: msg,
      duration: 2500
    }).present();
  }

  private parse_vcard( input:string ) {

    var Re1 = /^(version|fn|title|org):(.+)$/i;
    var Re2 = /^([^:;]+);([^:]+):(.+)$/;
    var ReKey = /item\d{1,2}\./;
    var fields = {};

    input.split(/\r\n|\r|\n/).forEach(function (line) {
        var results, key;

        if (Re1.test(line)) {
            results = line.match(Re1);
            key = results[1].toLowerCase();
            fields[key] = results[2];
        } else if (Re2.test(line)) {
            results = line.match(Re2);
            key = results[1].replace(ReKey, '').toLowerCase();

            var meta = {};
            results[2].split(';')
                .map(function (p, i) {
                var match = p.match(/([a-z]+)=(.*)/i);
                if (match) {
                    return [match[1], match[2]];
                } else {
                    return ["TYPE" + (i === 0 ? "" : i), p];
                }
            })
                .forEach(function (p) {
                meta[p[0]] = p[1];
            });

            if (!fields[key]) fields[key] = [];

            fields[key].push({
                meta: meta,
                value: results[3].split(';')
            })
        }
    });
    return fields;
  }
}
