import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-dashfeature',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(public menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.menuSelecionado = 1;
  }

}
