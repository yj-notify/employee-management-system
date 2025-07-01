// -------------------------------------------------------
// 7. Update Root Routes to mount Employee feature
// File: src/app/app.routes.ts
// -------------------------------------------------------
import { Routes } from '@angular/router';
import { employeeRoutes } from './employees/employees.routes';

export const routes: Routes = [
  { path: 'employees', children: employeeRoutes },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
];

