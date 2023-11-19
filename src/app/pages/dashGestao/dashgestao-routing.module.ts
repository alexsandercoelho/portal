import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashGestaoComponent } from './dashgestao.component';

const routes: Routes = [{
    path: '',
    component: DashGestaoComponent,
  }];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class DashGestaoRoutingModule{}
