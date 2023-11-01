import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { GrupoComponent } from './grupo.component';
import { GrupoRoutingModule } from './grupo-routing.module';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { PrimeIcons } from 'primeng/api';

@NgModule(
    {
        providers: [],
        declarations: [GrupoComponent],
        imports: [
            CommonModule,
            GrupoRoutingModule,
            NavbarModule,
            SidebarModule,
            TableModule,
            ButtonModule,
            DialogModule,
            DropdownModule
        ]
    }
)

export class GrupoModule { }
