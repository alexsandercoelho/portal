import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { RegraComponent } from './regra.component';
import { RegraRoutingModule } from './regra-routing.module';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

@NgModule(
    {
        providers: [],
        declarations: [RegraComponent],
        imports: [
            CommonModule,
            RegraRoutingModule,
            NavbarModule,
            SidebarModule,
            TableModule,
            ButtonModule,
            DialogModule,
            DropdownModule
        ]
    }
)

export class RegraModule { }
