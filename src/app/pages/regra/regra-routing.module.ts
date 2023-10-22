import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegraComponent } from './regra.component';

const routes: Routes = [{
    path: '',
    component: RegraComponent,
  }];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class RegraRoutingModule{}
