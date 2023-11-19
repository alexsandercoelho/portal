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
      case 1:
        this.router.navigate(['/dashgestao']);
        break;

      case 2:
        this.router.navigate(['/gestaoperfil']);
        break;

      case 3:
        this.router.navigate(['/gestaopessoas']);
        break;

      case 4:
        this.router.navigate(['/gestaoversao']);
        break;

      case 5:
        this.router.navigate(['/gruposdistribuicao']);
        break;

      case 6:
        this.router.navigate(['/regrasdistribuicao']);
        break;

      case 7:
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

      default:
        break;
    }

    this.menuService.menuSelecionado = menu;

  }

}
