import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarlybirdsComponent } from './earlybirds.component';

const routes: Routes = [{
    path: '',
    component: EarlybirdsComponent,
  }];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class EarlybirdsRoutingModule{}
