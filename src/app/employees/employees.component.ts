import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../shared/models';
import { EmployeeService } from '../core/services/employeeService';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {
  p = 1;
  employees: IEmployee[] = [];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployeesData();
  }

  getEmployeesData() {
    this.employeeService.getEmployees().subscribe(result => {
      this.employees = result;
    }, (error) => {
      console.log(error);
    });
  }
}
