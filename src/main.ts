import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { EmployeeListComponent } from './app/employees/employee-list.component';

bootstrapApplication(AppComponent, appConfig)
// bootstrapApplication(EmployeeListComponent, appConfig)

  .catch((err) => console.error(err));

  