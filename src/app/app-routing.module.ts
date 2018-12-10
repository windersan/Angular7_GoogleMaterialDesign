import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashComponent } from "./dash/dash.component";
import { ListEmployeesComponent } from "src/app/employee/list-employees.component";
import { CreateEmployeeComponent } from "src/app/employee/create-employee.component";
import { CrearEmpleadoComponent } from "src/app/empleado/crear-empleado.component";

const routes: Routes = [
  {
    path: "Dash",
    component: DashComponent
    //loadChildren: "./dash/dash.module#DashModule"
  },
  {
    path: "**",
    redirectTo: "Dash"
  },
  {
    path: "list",
    component: ListEmployeesComponent
  },
  {
    path: "create",
    component: CreateEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
