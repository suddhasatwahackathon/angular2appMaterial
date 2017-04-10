import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { DirectorComponent } from './director/director.component';
/** States */
let taskState = { name: 'task', url: '/task',  component: TaskComponent }; 
let directorState = { name: 'director', url: '/director',  component: DirectorComponent };

/** Root Application NgModule */

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'task', component: TaskComponent },
    { path: 'director', component: DirectorComponent }
  // { path: 'speakers', component: SpeakersComponent, children: [
  //   { path: 'speakersList', component: SpeakersListComponent, outlet: 'list' },
  //   { path: ':id', component: BioComponent, outlet: 'bio' }
  // ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
