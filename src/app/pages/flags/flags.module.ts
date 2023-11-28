import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { FlagsComponent } from './flags.component';
import { FlagsRoutingModule } from './flags-routing.module';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule(
    {
        providers: [],
        declarations: [FlagsComponent],
        imports: [
            CommonModule,
            FlagsRoutingModule,
            NavbarModule,
            SidebarModule,
            TableModule,
            ButtonModule,
            DialogModule,
            DropdownModule,
            CheckboxModule,
            FormsModule,
            ReactiveFormsModule,
            MultiSelectModule,
        ]
    }
)

export class FlagsModule { }
