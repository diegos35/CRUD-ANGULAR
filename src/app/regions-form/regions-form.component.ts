import { Component, OnInit, Input } from "@angular/core";
import { Paciente } from "../paciente";
import { Region } from "../region";
import { PacienteService } from "../services/paciente.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-regions-form',
  templateUrl: './regions-form.component.html',
  styleUrls: ['./regions-form.component.css']
})
export class RegionsFormComponent implements OnInit {

  pacientes: Paciente = new Paciente();

  pa: Region = {
    nombre: null,
  };

  @Input() region: Region;

  id: any;

  public editar: boolean = false;
  pacientess: Paciente[];

  constructor(
    private pacienteService: PacienteService,
    private activatedroute: ActivatedRoute
  ) {
    this.id = activatedroute.snapshot.params["id"];

    if (this.id) {
      this.editar = true;
      this.pacienteService.getid(this.id).subscribe(res => {
        this.pa = res;
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
    //   this.pacienteService.put(this.pa).subscribe(data => {
    //     alert("pelicula actualizada");
    //   });
    // } else {
    //   this.pacienteService.save(this.pa).subscribe(data => {
    //     alert("pelicula guardada");
    //   });
    // }
  }
}
