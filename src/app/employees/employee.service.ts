import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

// Define the interface here or import from model if separated
interface EmployeePage {
  content: Employee[];
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
  // Add other fields as needed (e.g., sort, last, first, etc.)
}

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  // private readonly baseUrl = 'http://localhost:8080/api/employees';
  // For Azure: use this instead when deploying
  private readonly baseUrl = 'https://employee-apis-h4dye2a9etd7csdc.southeastasia-01.azurewebsites.net/api/employees';

  constructor(private http: HttpClient) {}

  /** Read (list paginated) */
  getEmployees(page: number = 0, size: number = 10): Observable<EmployeePage> {
    const url = `${this.baseUrl}?page=${page}&size=${size}`;
    return this.http.get<EmployeePage>(url);
  }

  /** Read (single) */
  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  /** Create */
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  /** Update */
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/${employee.id}`, employee);
  }

  /** Delete */
  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
