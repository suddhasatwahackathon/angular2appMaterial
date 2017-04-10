// Imports
// Deprecated import
// import { RouterConfig } from '@angular/router';
import { Routes } from '@angular/router';

import { TaskComponent } from '../task/task.component';
import { DirectorComponent } from '../director/director.component';


// Route Configuration
export const sideNavComponentRoute: Routes = [
  { path: 'task', component: TaskComponent },
  { path: 'director', component: DirectorComponent }
];