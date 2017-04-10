import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { TooltipPosition } from '@angular/material'
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

@Component({
	moduleId: module.id,
  	selector: 'app-root',
  	templateUrl: 'app.component.html',
  	styleUrls: ['app.component.scss'],
  	encapsulation: ViewEncapsulation.None,

})
export class AppComponent implements OnInit {
  ngOnInit(){
  	
  }
}

