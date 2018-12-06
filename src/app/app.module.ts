import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
} from "@angular/material";
import { DragDropModule } from "@angular/cdk/drag-drop";
//import { DashComponent } from "./dash/dash.component";
//import { NavComponent } from "./dash/nav/nav.component";
//import { ToolComponent } from "./dash/tool/tool.component";
import { CreateEmployeeComponent } from "./employee/create-employee.component";
import { ListEmployeesComponent } from "./employee/list-employees.component";
import { HideComponent } from "./util/hide.component";
//import { DragdropComponent } from "./util/dragdrop.component";
import { DashModule } from "src/app/dash/dash.module";

@NgModule({
  declarations: [
    AppComponent,
    // DashComponent,
    //NavComponent,
    // ToolComponent,
    CreateEmployeeComponent,
    ListEmployeesComponent,
    HideComponent
    //DragdropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
