import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashfeature',
  templateUrl: './dashfeature.component.html',
  styleUrls: ['./dashfeature.component.scss']
})

export class DashFeatureComponent {

  constructor(private router: Router, public menuService: MenuService) {

  }

  selectMenu(menu: number) {
    switch (menu) {
      case 0:
        this.router.navigate(['/painel']);
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

  }

}
