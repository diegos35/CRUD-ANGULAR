import { Component, OnInit } from "@angular/core";
import { PacienteService } from "../services/paciente.service";
import { Location } from "../Location";

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {
  public displayedColumns: string[] = [
    "id",
    "direccion",
    "postal",
    "ciudad",
    "pais",
    "editar",
    "eliminar"
  ];

  public location = [ 
    {
      'id': 1,
      'direccion': 'calle 64564',
      'postal': '57',
      'ciudad': 'Neiva',
      'providencia': 'providencia',
      'pais': 'Colombia'

    },
    {
      'id': 2,
      'direccion': 'calle 444',
      'postal': '21',
      'ciudad': 'Bogota',
      'providencia': 'providencia',
      'pais': 'Colombia'
    },
    {
      'id': 3,
      'direccion': 'calle 444',
      'postal': '21',
      'ciudad': 'Bogota',
      'providencia': 'providencia',
      'pais': 'Colombia'
    },
  ];

  public locationSeleccionado: Location; //atributo de la clase de tipo "Paciente"
  public locations: Location[]; //dato paciente de Tipo Paciente

  constructor(private pacienteService: PacienteService) {
    this.pacienteService.get().subscribe(res => {
      this.locations= res;
    });
  }

  ngOnInit() {}

  delete(id) {
    this.pacienteService.delete(id).subscribe(data => {
      alert("eliminacion con exito ");
    });
  }

  public seleccionaRegions(country: Location): void {
    this.locationSeleccionado = country; // this hace referencia al atributo de la clase y paciente es el
  }
}
