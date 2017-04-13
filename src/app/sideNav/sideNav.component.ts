import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'side-nav',
	templateUrl: 'sideNav.component.html',
  	styleUrls: ['sideNav.component.scss'],
})
export class sideNavComponent implements OnInit {
	constructor() {}
	navItems = [
	  {name: 'Assinged To Task', href: 'task', icon:'icon-employee'},
	  {name: 'Assigned To Group', href: 'group', icon:'icon-family-care'},
	  {name: 'Director', href: 'director', icon:'icon-home'},
	];
	ngOnInit() {
		
	}
}