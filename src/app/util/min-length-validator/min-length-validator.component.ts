import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-min-length-validator",
  templateUrl: "./min-length-validator.component.html",
  styleUrls: ["./min-length-validator.component.css"]
})
export class MinLengthValidatorComponent {
  totCarton = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  getErrorMessage() {
    return this.totCarton.hasError("minlength")
      ? "Put in at least 4 digits, please"
      : "";
  }
}
