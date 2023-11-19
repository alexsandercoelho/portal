import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashGestaoComponent } from './dashgestao.component';
import { DashGestaoRoutingModule } from './dashgestao-routing.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';


@NgModule(
    {
        providers:[],
        declarations:[DashGestaoComponent],
        imports:[
            CommonModule,
            DashGestaoRoutingModule,
            NavbarModule,
            SidebarModule,
        ]
    }
)

export class DashGestaoModule{}
