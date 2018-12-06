import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashRoutingModule } from "./dash-routing.module";
import { DashComponent } from "./dash.component";
import { NavComponent } from "./nav/nav.component";
import { ToolComponent } from "./tool/tool.component";

import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
} from "@angular/material";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragdropComponent } from "src/app/util/dragdrop.component";

@NgModule({
  declarations: [DashComponent, NavComponent, ToolComponent, DragdropComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    DragDropModule
  ]
  //exports: [DashModule]
})
export class DashModule {}
