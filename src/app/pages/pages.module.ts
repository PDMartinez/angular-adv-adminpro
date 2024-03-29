import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
