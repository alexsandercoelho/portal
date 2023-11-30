import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { EarlybirdsComponent } from './earlybirds.component';
import { EarlybirdsRoutingModule } from './earlybirds-routing.module';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
@NgModule(
    {
        providers: [],
        declarations: [EarlybirdsComponent],
        imports: [
            CommonModule,
            EarlybirdsRoutingModule,
            NavbarModule,
            TableModule,
            ButtonModule,
            DialogModule,
            DropdownModule,
            FormsModule,
            ReactiveFormsModule,
            MultiSelectModule,
            SidebarModule
        ]
    }
)

export class EarlybirdsModule { }
