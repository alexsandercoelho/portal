import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { MudancaRoutingModule } from './mudanca-routing.module';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DashFeatureModule } from '../dashFeature/dashfeature.module';
import { mudancaComponent } from './mudanca.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule(
    {
        providers: [],
        declarations: [mudancaComponent],
        imports: [
            CommonModule,
            MudancaRoutingModule,
            NavbarModule,
            SidebarModule,
            TableModule,
            ButtonModule,
            DialogModule,
            DropdownModule,
            ConfirmDialogModule,
            DashFeatureModule,
            FormsModule,
            ReactiveFormsModule,
        ]
    }
)

export class MudancaModule { }
