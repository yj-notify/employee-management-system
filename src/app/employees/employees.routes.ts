// -------------------------------------------------------
// 6. Feature Routes for Employees (lazy‑loaded pattern)
// File: src/app/employees/employees.routes.ts
// -------------------------------------------------------
import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list.component';

export const employeeRoutes: Routes = [
  { path: '', component: EmployeeListComponent },
];
