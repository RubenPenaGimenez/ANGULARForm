import { Injectable } from "@angular/core";
import { of , Observable} from "rxjs";

@Injectable()
export class artistasServices{

    constructor(){}
    
    artistas: Artistas[] = [ ];

    public signArtists(idArtista:number, nombreArtista:string, fechaDeRegistro:string , estiloMusical:string, correo:string, telefono:number, nombreAKA:string, mensaje:string, aceptarTerminos:boolean):Observable<Artistas []> {
        if( nombreArtista != "") {
            this.artistas.push({idArtista:idArtista, nombreArtista:nombreArtista, fechaDeRegistro:fechaDeRegistro, estiloMusical:estiloMusical, correo:correo, telefono:telefono, nombreAKA:nombreAKA, mensaje:mensaje, aceptarTerminos:aceptarTerminos });
        } return of(this.artistas);
        }
    }

export interface Artistas {idArtista:number, nombreArtista:string, fechaDeRegistro:string , estiloMusical:string, correo:string, telefono:number, nombreAKA:string, mensaje:string, aceptarTerminos:boolean}
