import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './app.route.module';
import {UIRouterModule} from "ui-router-ng2";

// Material 2 
import 'hammerjs'  // For the material 2 dependency
import { MaterialModule } from '@angular/material'

import { AppComponent } from './app.component';

import { sideNavComponent } from './sideNav/sideNav.component';
import { TaskComponent } from './task/task.component';
import { DirectorComponent } from './director/director.component';
import { DirectorListComponent, DirectorListNestedComponent } from './director/directorlist.component';

import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

let INITIAL_COMPONENTS =  [ AppComponent, sideNavComponent, TaskComponent, DirectorComponent, DirectorListComponent, DirectorListNestedComponent, PageNotFoundComponent ];


@NgModule({
  declarations: [
    INITIAL_COMPONENTS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
