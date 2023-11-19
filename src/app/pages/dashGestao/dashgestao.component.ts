import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-dashfeature',
  templateUrl: './dashgestao.component.html',
  styleUrls: ['./dashgestao.component.scss']
})
export class DashGestaoComponent {

  constructor(public menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.menuSelecionado = 1;
  }

}
