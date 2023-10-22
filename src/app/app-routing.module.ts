import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: LoginComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'gestaoperfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilModule),
  },
  {
    path: 'gestaopessoas',
    loadChildren: () => import('./pages/pessoa/pessoa.module').then(m => m.PessoaModule),
  },
  {
    path: 'gestaoversao',
    loadChildren: () => import('./pages/versao/versao.module').then(m => m.VersaoModule),
  },
  {
    path: 'gruposdistribuicao',
    loadChildren: () => import('./pages/grupo/grupo.module').then(m => m.GrupoModule),
  },
  {
    path: 'regrasdistribuicao',
    loadChildren: () => import('./pages/regra/regra.module').then(m => m.RegraModule),
  }
];

@NgModule({
  imports: [BrowserAnimationsModule, TableModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
