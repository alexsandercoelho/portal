import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { VersaoComponent } from './versao.component';
import { VersaoRoutingModule } from './versao-routing.module';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule(
    {
        providers: [],
        declarations: [VersaoComponent],
        imports: [
            CommonModule,
            VersaoRoutingModule,
            NavbarModule,
            SidebarModule,
            TableModule,
            ButtonModule,
            DialogModule,
            DropdownModule,
            SplitButtonModule,
            FormsModule,
            ReactiveFormsModule,
        ]
    }
)

export class VersaoModule { }
