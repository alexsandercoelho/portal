import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mudancaComponent } from './mudanca.component';

const routes: Routes = [{
    path: '',
    component: mudancaComponent,
  }];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class MudancaRoutingModule{}
