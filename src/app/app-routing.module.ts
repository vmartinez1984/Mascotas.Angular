import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoMascotaComponent } from './components/listado-mascota/listado-mascota.component';
import { FormMascotaComponent } from './components/form-mascota/form-mascota.component';
import { DetalleMascotaComponent } from './components/detalle-mascota/detalle-mascota.component';

const routes: Routes = [
  { path: '', component: ListadoMascotaComponent },
  { path: 'agregar', component: FormMascotaComponent },
  { path: 'detalles/:id', component: DetalleMascotaComponent },
  { path: 'editar/:id', component: FormMascotaComponent },
  { path: '**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
