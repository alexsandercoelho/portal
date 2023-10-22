import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
