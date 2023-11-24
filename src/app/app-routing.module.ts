import { EarlybirdsModule } from './pages/earlybirds/earlybirds.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { mudancaComponent } from './pages/mudanca/mudanca.component';
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
    path: 'mudanca', component: mudancaComponent
  },

  {
    path: '', component: LoginComponent
  },
  {
    path: 'painel',
    loadChildren: () => import('./pages/painel/painel.module').then(m => m.PainelModule),
  },
  {
    path: 'dashgestao',
    loadChildren: () => import('./pages/dashGestao/dashgestao.module').then(m => m.DashGestaoModule),
  },
  {
    path: 'dashfeature',
    loadChildren: () => import('./pages/dashFeature/dashfeature.module').then(m => m.DashFeatureModule),
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
   path: 'earlybirds',
    loadChildren: () => import('./pages/earlybirds/earlybirds.module').then(m => m.EarlybirdsModule),
  },
  {
    path: 'flags',
    loadChildren: () => import('./pages/flags/flags.module').then(m => m.FlagsModule),
  },
  {
    path: 'mudancas',
    loadChildren: () => import('./pages/mudanca/mudanca.module').then(m => m.MudancaModule),
  }
];

@NgModule({
  imports: [BrowserAnimationsModule, TableModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
