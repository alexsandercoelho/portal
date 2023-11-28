import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashFeatureComponent } from './dashfeature.component';
import { DashFeatureRoutingModule } from './dashfeature-routing.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { MenuModule } from 'primeng/menu';



@NgModule(
    {
        providers:[],
        declarations:[DashFeatureComponent],
        imports:[
            CommonModule,
            DashFeatureRoutingModule,
            NavbarModule,
            MenuModule,
        ]
    }
)

export class DashFeatureModule{

}
