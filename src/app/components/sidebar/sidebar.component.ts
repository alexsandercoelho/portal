import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private router: Router, public menuService: MenuService) {

  }

  selectMenu(menu: number) {
    switch (menu) {
      case 0:
        this.router.navigate(['/painel']);
        break;

        case 1:
        this.router.navigate(['/dashgestao']);
        break;

	case 3:
        this.router.navigate(['/gestaoperfil']);
        break;

      case 4:
        this.router.navigate(['/gestaopessoas']);
        break;

      case 5:
        this.router.navigate(['/gestaoversao']);
        break;

      case 6:
        this.router.navigate(['/gruposdistribuicao']);
        break;

      case 7:
        this.router.navigate(['/regras']);
        break;

      default:
        break;
    }

    this.menuService.menuSelecionado = menu;

  }

}
