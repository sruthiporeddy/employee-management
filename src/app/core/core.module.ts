import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesModule } from '../employees/employees.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmployeesModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreModule { }
