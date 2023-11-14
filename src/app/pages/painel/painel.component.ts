import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent {

  constructor(public menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.menuSelecionado = 1;
  }

}
