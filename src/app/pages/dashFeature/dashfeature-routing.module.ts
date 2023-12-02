import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashFeatureComponent } from './dashfeature.component';
import { EarlybirdsComponent } from '../earlybirds/earlybirds.component';
import { FlagsComponent } from '../flags/flags.component';
import { mudancaComponent } from '../mudanca/mudanca.component';


const routes: Routes = [{
    path: '',
    component: DashFeatureComponent
  }];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: []
  })

  export class DashFeatureRoutingModule{}
