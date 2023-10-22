import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VersaoComponent } from './versao.component';

const routes: Routes = [{
    path: '',
    component: VersaoComponent,
  }];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class VersaoRoutingModule{}
