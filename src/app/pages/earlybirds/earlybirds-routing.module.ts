import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';
import { EarlybirdsComponent } from './earlybirds.component';
import { DashFeatureRoutingModule } from '../dashFeature/dashfeature-routing.module';

const routes: Routes = [{
    path: '',
    component: EarlybirdsComponent
  }];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
  })

  export class EarlybirdsRoutingModule{}
