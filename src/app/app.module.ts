import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material 2 
import 'hammerjs'  // For the material 2 dependency
import { MaterialModule } from '@angular/material'

import { AppComponent } from './app.component';
import { sideNavComponent } from './sideNav/sideNav.component';

@NgModule({
  declarations: [
    AppComponent,
    sideNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
