import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements AfterViewInit {
  mascotas: Mascota[] = []
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
    this.paginator._intl.itemsPerPageLabel = "Elementos por página"
    this.dataSource.sort = this.sort
  }
  displayedColumns: string[] = ['nombre', 'edad', 'color', 'peso', 'raza', 'acciones'];
  dataSource = new MatTableDataSource<Mascota>();

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor(private service: MascotaService){
    this.getAll()
  }

  getAll(){
    this.service.getAll().subscribe({next:(data)=>{
       this.dataSource.data = data
      }
    })
  }
}