import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class EmployeesModule { }
