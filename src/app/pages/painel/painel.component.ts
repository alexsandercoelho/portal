import { DashGestaoRoutingModule } from '../dashGestao/dashgestao-routing.module';
import { DashGestaoModule } from '../dashGestao/dashgestao.module';
import { DashGestaoComponent } from '../dashGestao/dashgestao.component';
import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent {
  [x: string]: any;
  visible: boolean = false;
  constructor(public menuService: MenuService) {

  }

  ngOnInit() {
    this.menuService.menuSelecionado = 1;
  }

  showDashGestao(){
    this['router'].navigate(['/dashgestao']);
  }
  showDashFeature(){
    this['router'].navigate(['/dashfeature']);
  }


}
