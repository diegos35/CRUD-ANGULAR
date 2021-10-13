import { Component, OnInit } from "@angular/core";
import { PacienteService } from "../services/paciente.service";
import { Country } from "../country";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  public displayedColumns: string[] = [
    "id",
    "nombre",
    "region",
    "editar",
    "eliminar"
  ];

  public country = [ 
    {
      'id': 1,
      'nombre': 'Colombia',
      'region': 'Europa'

    },
    {
      'id': 2,
      'nombre': 'US',
      'region': 'Asia'
    },
    {
      'id': 3,
      'nombre': 'uruguay',
      'region': 'America'
    },
  ];

  public countrySeleccionado: Country; //atributo de la clase de tipo "Paciente"
  public countrys: Country[]; //dato paciente de Tipo Paciente

  constructor(private pacienteService: PacienteService) {
    this.pacienteService.get().subscribe(res => {
      this.countrys= res;
    });
  }

  ngOnInit() {}

  delete(id) {
    this.pacienteService.delete(id).subscribe(data => {
      alert("eliminacion con exito ");
    });
  }

  public seleccionaRegions(country: Country): void {
    this.countrySeleccionado = country; // this hace referencia al atributo de la clase y paciente es el
  }
}
