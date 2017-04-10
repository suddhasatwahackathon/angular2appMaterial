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
	  {name: 'Assinged To Task', href: 'task'},
	  {name: 'Assigned To Group', href: 'task'},
	  {name: 'Director', href: 'director'},
	];
	ngOnInit() {
		
	}
}