import { Component, OnInit, Input } from "@angular/core";
import { Paciente } from "../paciente";
import { Country } from "../country";
import { PacienteService } from "../services/paciente.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  
  countries: Country = new Country();

  country: Country = {
    nombre: null,
    region:null

  };
  //array para el select de regiones
  regiones = [
    {id:1, nombre:'Europa'},
    {id:2, nombre:'Asia'},
    {id:3, nombre:'America'}
  ];

  seleccionada: string = this.regiones[0].nombre;

  @Input() countryss: Country;

  id: any;

  public editar: boolean = false;
  countrys: Country[];

  constructor(
    private pacienteService: PacienteService,
    private activatedroute: ActivatedRoute
  ) {
    this.id = activatedroute.snapshot.params["id"];

    if (this.id) {
      this.editar = true;
      this.pacienteService.getid(this.id).subscribe(res => {
        this.country = res;
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
    if (this.editar) {
      this.pacienteService.put(this.country).subscribe(data => {
        alert("pelicula actualizada");
      });
    }// else {
    //   this.pacienteService.save(this.countryss).subscribe(data => {
    //     alert("pelicula guardada");
    //   });
    // }
  }

}
