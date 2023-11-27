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
import { DashFeatureModule } from '../dashFeature/dashfeature.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule(
    {
        providers: [],
        declarations: [EarlybirdsComponent],
        imports: [
            CommonModule,
            EarlybirdsRoutingModule,
            DashFeatureModule,
            NavbarModule,
            SidebarModule,
            TableModule,
            ButtonModule,
            DialogModule,
            DropdownModule,
            FormsModule,
            ReactiveFormsModule,
        ]
    }
)

export class EarlybirdsModule { }
