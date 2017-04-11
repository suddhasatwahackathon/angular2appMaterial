import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { DirectorComponent } from './director/director.component';
import { DirectorListComponent, DirectorListNestedComponent } from './director/directorlist.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';


/** Root Application NgModule */

const routes: Routes = [
  { path: '*', component: PageNotFoundComponent},
  { path: 'task', component: TaskComponent },
  { path: 'group', component: TaskComponent },
  { 
    path: 'director', component: DirectorComponent,
    children: [
        { 
          path: 'list',  component: DirectorListComponent ,
          children: [
              { 
                path: 'nested',  component: DirectorListNestedComponent 
              }

          ] 
        }

    ] 
  }
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
