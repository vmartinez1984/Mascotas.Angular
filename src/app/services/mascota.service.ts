import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Mascota } from '../interfaces/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  mascotas: Mascota[] = [
    { id: 1, color: "Blanco con negro", edad: 2, nombre: "Perejilo", peso: 6, raza: "Gato europeo" },
    { id: 2, color: "Naranja", edad: 7, nombre: "Tamarindo", peso: 5, raza: "Gato europeo" },
    { id: 3, color: "Gris con blanco", edad: 13, nombre: "Wanabana", peso: 3, raza: "Gato europeo" }
  ]
  constructor(
    //private httpClient: HttpClient
  ) { }

  getAll(): Observable<Mascota[]> {  
    return new Observable((observer) => {
      return observer.next(this.mascotas);
    });
  }

  getById(id: number):Observable<Mascota> {   
    return new Observable((observer) => {
      var mascota

      mascota = this.mascotas.find(x => { return x.id == id })

      return observer.next(mascota);
    });
  }

  update(id: number, mascota: Mascota): Observable<any>{    
    return new Observable((observer) => {
      var mascotaOrigen

      mascotaOrigen = this.mascotas.find(x => { return x.id == id })      
      mascotaOrigen!.color = mascota.color
      mascotaOrigen!.edad = mascota.edad
      mascotaOrigen!.nombre = mascota.nombre
      mascotaOrigen!.peso = mascota.peso
      mascotaOrigen!.raza = mascota.raza

      return observer.next();
    });
  }

  delete(id:number):Observable<any>{
    return new Observable((observer) => {
      return observer.next();
    });
  }
}
