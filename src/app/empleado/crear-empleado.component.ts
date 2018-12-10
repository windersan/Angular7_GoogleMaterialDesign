import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-crear-empleado",
  templateUrl: "./crear-empleado.component.html",
  styleUrls: ["./crear-empleado.component.css"]
})
export class CrearEmpleadoComponent implements OnInit {
  empleadoFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.empleadoFormGroup = this.fb.group({
      apellido: ["", Validators.required],
      email: [""]
      //  habilidades: this.fb.group({
      //  habilidad: [""],
      // nivel: [""]
      //  })
    });
  }
}
