import { Component, OnInit, Input } from "@angular/core";
import { Paciente } from "../paciente";
import { Location } from "../Location";
import { PacienteService } from "../services/paciente.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-locations-form',
  templateUrl: './locations-form.component.html',
  styleUrls: ['./locations-form.component.css']
})
export class LocationsFormComponent implements OnInit {

  locations: Location = new Location();

  Location: Location = {
    id: null,
    direccion: null,
    postal: null,
    ciudad: null,
    providencia: null,
    pais: null

  };
  //array para el select de regiones
  paises = [
    {id:1, nombre:'Europa'},
    {id:2, nombre:'Asia'},
    {id:3, nombre:'America'}
  ];

  seleccionada: string = this.paises[0].nombre;

  @Input() locationsparam: Location;

  id: any;

  public editar: boolean = false;
  location: Location[];

  constructor(
    private pacienteService: PacienteService,
    private activatedroute: ActivatedRoute
  ) {
    this.id = activatedroute.snapshot.params["id"];

    if (this.id) {
      this.editar = true;
      this.pacienteService.getid(this.id).subscribe(res => {
        this.locations = res;
      });
      //console.log(res)

      //this.pa=this.pacientess.find((m)=>
      //{return m.id==this.id});console.log(this.pa) //buscar el m.id enviamos una exprecion lambda
      // }, );
    } else {
      this.editar = false;
    }
  }

  ngOnInit() {}

  guardar() {
    // if (this.editar) {
    //   this.pacienteService.put(this.country).subscribe(data => {
    //     alert("pelicula actualizada");
    //   });
    // } else {
    //   this.pacienteService.save(this.country).subscribe(data => {
    //     alert("pelicula guardada");
    //   });
    // }
  }
}
