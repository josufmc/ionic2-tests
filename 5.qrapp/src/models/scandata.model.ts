export class ScanData{
    info:string;
    tipo:string;
    constructor(texto:string){
        this.tipo = 'no definido';
        if (texto.startsWith("http")){
            this.tipo = 'http';
        } else if (texto.startsWith("geo")){
            this.tipo = 'geo';
        } else if (texto.startsWith("BEGIN:VCARD")){
            this.tipo = 'vcard';
        } else if (texto.startsWith("MATMSG:")){
            this.tipo = 'mail';
        }
        this.info = texto;
    }
}