// -------------------------------------------------------
// 4. Standalone Component for CRUD
// File: src/app/employees/employee-list.component.ts
// -------------------------------------------------------
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  editing: Employee | null = null;
  formModel: Partial<Employee> = {};

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  // loadEmployees() {
  //   this.employeeService.getEmployees().subscribe(data => (this.employees = data));
  // }
  loadEmployees() {
    this.employeeService.getEmployees().subscribe(data => {this.employees = data.content;});  
  }

  

  save() {
    if (this.editing) {
      const updated = { ...this.editing, ...this.formModel } as Employee;
      this.employeeService.updateEmployee(updated).subscribe(() => {
        this.editing = null;
        this.formModel = {};
        this.loadEmployees();
      });
    } else {
      this.employeeService.addEmployee(this.formModel as Employee).subscribe(() => {
        this.formModel = {};
        this.loadEmployees();
      });
    }
  }

  edit(emp: Employee) {
    this.editing = emp;
    this.formModel = { ...emp };
  }

  cancelEdit() {
    this.editing = null;
    this.formModel = {};
  }

  remove(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => this.loadEmployees());
  }
}
