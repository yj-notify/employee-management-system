export interface Employee {
  id: number;
  name: string;
  age: number;
  email: string;
  department: string;
}

export interface EmployeePage {
  content: Employee[];
  totalPages: number;
  totalElements: number;
  // Add other fields from the API response if needed
}

// src/app/shared/models/page.model.ts

// export interface Page<T> {
//   content: T[];
//   totalPages: number;
//   totalElements: number;
//   number: number;
//   size: number;
//   // add others if needed
// }
