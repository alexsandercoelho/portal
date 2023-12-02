import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Router } from '@angular/router';

interface MenuItem {
  id: number;
  name: string;
}
@Component({
  selector: 'dashfeature',
  templateUrl: './dashfeature.component.html',
  styleUrls: ['./dashfeature.component.scss']
})

export class DashFeatureComponent {
  menus: MenuItem[] = [];

  constructor(public menuService: MenuService, private router: Router) {

  }
  selectMenu(menuId: number) {
    switch (menuId) {
      case 0:
        this.router.navigate(['/painel']);
        break;

        case 2:
        this.router.navigate(['/dashfeature']);
        break;

      case 8:
        this.router.navigate(['/earlybirds']);
        break;

      case 9:
        this.router.navigate(['/flags']);
        break;

      case 10:
          this.router.navigate(['/mudancas']);
          break;
    }
    this.menuService.menuSelecionado = menuId;

  }

}
