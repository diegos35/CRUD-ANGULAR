import { Component, OnInit } from "@angular/core";
import { PacienteService } from "../services/paciente.service";

import { Paciente } from "../paciente";

import { Region } from "../region";

@Component({
  selector: 'app-regions-list',
  templateUrl: './regions-list.component.html',
  styleUrls: ['./regions-list.component.css']
})
export class RegionsListComponent implements OnInit {

  public displayedColumns: string[] = [
    "id",
    "nombre",
    "editar",
    "eliminar"
  ];

  public regiones = [ 
    {
      'id': 1,
      'nombre': 'Europa'
    },
    {
      'id': 2,
      'nombre': 'Asia'
    },
    {
      'id': 3,
      'nombre': 'America'
    },
  ];

  public regionSeleccionado: Region; //atributo de la clase de tipo "Paciente"
  public regions: Region[]; //dato paciente de Tipo Paciente

  constructor(private pacienteService: PacienteService) {
    this.pacienteService.get().subscribe(res => {
      this.regions = res;
    });
  }

  ngOnInit() {}

  delete(id) {
    this.pacienteService.delete(id).subscribe(data => {
      alert("eliminacion con exito ");
    });
  }

  public seleccionaRegions(region: Region): void {
    this.regionSeleccionado = region; // this hace referencia al atributo de la clase y paciente es el
  }
}