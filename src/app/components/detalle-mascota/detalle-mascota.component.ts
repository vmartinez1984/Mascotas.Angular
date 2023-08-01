import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-detalle-mascota',
  templateUrl: './detalle-mascota.component.html',
  styleUrls: ['./detalle-mascota.component.css']
})
export class DetalleMascotaComponent {
  mascota?:Mascota
  constructor(private router: Router,
    private service: MascotaService
  ){
    var id = this.router.parseUrl(this.router.url).root.children['primary'].segments[1].path
    this.service.getById(parseInt(id)).subscribe({
      next:(data)=>{
        this.mascota = data
        console.log(this.mascota)
      }
    })

  }
}
