import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashRoutingModule } from "./dash-routing.module";
import { DashComponent } from "./dash.component";
import { NavComponent } from "./nav/nav.component";
import { ToolComponent } from "./tool/tool.component";
import { CrearEmpleadoComponent } from "src/app/empleado/crear-empleado.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule
} from "@angular/material";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragdropComponent } from "src/app/util/dragdrop.component";

@NgModule({
  declarations: [
    DashComponent,
    NavComponent,
    ToolComponent,
    DragdropComponent,
    CrearEmpleadoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DashRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    DragDropModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ]
  //exports: [DashModule]
})
export class DashModule {}
