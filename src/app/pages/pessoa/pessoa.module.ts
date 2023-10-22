import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { PessoaComponent } from './pessoa.component';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { ButtonModule  } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';


@NgModule(
    {
        providers: [],
        declarations: [PessoaComponent],
        imports: [
            CommonModule,
            PessoaRoutingModule,
            NavbarModule,
            SidebarModule,
            ReactiveFormsModule,
            TableModule,
            ButtonModule,
            DialogModule,
            DropdownModule
        ]
    }
)

export class PessoaModule { }
