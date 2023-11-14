import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel.component';
import { PainelRoutingModule } from './painel-routing.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { ButtonModule} from 'primeng/button'


@NgModule(
    {
        providers:[],
        declarations:[PainelComponent],
        imports:[
            CommonModule,
            PainelRoutingModule,
            NavbarModule,
            SidebarModule,
            ButtonModule
        ]
    }
)

export class PainelModule{}
