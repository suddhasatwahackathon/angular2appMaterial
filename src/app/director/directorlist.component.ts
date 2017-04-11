import { Component, OnInit } from '@angular/core';
let max = 5;

@Component({
	moduleId: module.id,
	template:`
		<ul>
			<li> AK Sharma</li>
			<li>NK Jain</li>
			<li>SP Gupta</li>
			<li>SS Gupta</li>
			<li>MS Agarwal</li>
		</ul>
		<div>Click <a routerLink='/director/list/nested'>here</a> for nested list view</div>
		<div class='inner-outlet'>
			<router-outlet></router-outlet>
		</div>
	`
})
export class DirectorListComponent implements OnInit {
	constructor() {}
	 
	ngOnInit() {
		
	}
}


@Component({
	moduleId: module.id,
	template:`
		<div class='director-list-nested-wrapper'><h1>This is the nested screen with interpolation route value {{routeName}} from the director child list route</h1>
		<md-tab-group color="primary">
		  <md-tab label="Dummy Content">Content 1</md-tab>
		  <md-tab label="Form Element">
		  <md-card class="demo-card demo-basic">
		    <md-toolbar color="primary">Basic</md-toolbar>
		    <md-card-content>
		      <form>
		        <md-input-container class="demo-full-width">
		          <input mdInput placeholder="Company (disabled)" disabled value="Google">
		        </md-input-container>

		        <table style="width: 100%" cellspacing="0"><tr>
		          <td>
		            <md-input-container style="width: 100%">
		              <input mdInput placeholder="First name">
		            </md-input-container>
		          </td>
		          <td>
		            <md-input-container style="width: 100%">
		              <input mdInput placeholder="Long Last Name That Will Be Truncated">
		            </md-input-container>
		          </td>
		        </tr></table>
		        <p>
		          <md-input-container class="demo-full-width">
		            <textarea mdInput placeholder="Address">1600 Amphitheatre Pkway</textarea>
		          </md-input-container>
		          <md-input-container class="demo-full-width">
		            <textarea mdInput placeholder="Address 2"></textarea>
		          </md-input-container>
		        </p>
		        <table style="width: 100%" cellspacing="0"><tr>
		          <td>
		            <md-input-container class="demo-full-width">
		              <input mdInput placeholder="City" value="Mountain View">
		            </md-input-container>
		          </td>
		          <td>
		            <md-input-container class="demo-full-width">
		              <input mdInput placeholder="State" maxLength="2" value="CA">
		            </md-input-container>
		          </td>
		          <td>
		            <md-input-container class="demo-full-width">
		              <input mdInput #postalCode maxLength="5" placeholder="Postal Code" value="94043">
		              <md-hint align="end">
		                <md-icon>mode_edit</md-icon>
		                {{postalCode.value.length}} / 5
		              </md-hint>
		            </md-input-container>
		          </td>
		        </tr></table>
		      </form>
		    </md-card-content>
		  </md-card>

		  <md-card class="demo-card demo-basic">
		    <md-toolbar color="primary">Error messages</md-toolbar>
		    <md-card-content>
		      <h4>Regular</h4>

		      <p>
		        <md-input-container>
		          <input mdInput placeholder="example" [(ngModel)]="errorMessageExample1" required>
		          <md-error>This field is required</md-error>
		        </md-input-container>

		        <md-input-container>
		          <input mdInput placeholder="email">

		          <md-error>
		            Please enter a valid email address
		          </md-error>
		        </md-input-container>
		      </p>

		      <h4>With hint</h4>

		      <md-input-container>
		        <input mdInput placeholder="example" [(ngModel)]="errorMessageExample2" required>
		        <md-error>This field is required</md-error>
		        <md-hint>Please type something here</md-hint>
		      </md-input-container>


		      <form novalidate>
		        <h4>Inside a form</h4>

		        <md-input-container>
		          <input mdInput name="example" placeholder="example"
		            [(ngModel)]="errorMessageExample3" required>
		          <md-error>This field is required</md-error>
		        </md-input-container>

		        <button color="primary" md-raised-button>Submit</button>
		      </form>
		    </md-card-content>
		  </md-card>

		  <md-card class="demo-card demo-basic">
		    <md-toolbar color="primary">Prefix + Suffix</md-toolbar>
		    <md-card-content>
		      <h4>Text</h4>
		      <md-input-container align="end">
		        <input mdInput placeholder="amount">
		        <span mdPrefix>$&nbsp;</span>
		        <span mdSuffix>.00</span>
		      </md-input-container>

		      <h4>Icons</h4>
		      <md-input-container>
		        <input mdInput placeholder="amount">
		        <md-icon mdPrefix>attach_money</md-icon>
		        <md-icon mdSuffix>mode_edit</md-icon>
		      </md-input-container>
		    </md-card-content>
		  </md-card>

		  <md-card class="demo-card demo-basic">
		    <md-toolbar color="primary">Divider Colors</md-toolbar>
		    <md-card-content>
		      <h4>Input</h4>
		      <md-input-container color="primary" >
		        <input mdInput placeholder="Default Color" value="example">
		      </md-input-container>
		      <md-input-container color="accent">
		        <input mdInput placeholder="Accent Color" value="example">
		      </md-input-container>
		      <md-input-container color="warn">
		        <input mdInput placeholder="Warn Color" value="example">
		      </md-input-container>

		      <h4>Textarea</h4>
		      <md-input-container color="primary">
		        <textarea mdInput placeholder="Default Color">example</textarea>
		      </md-input-container>
		      <md-input-container color="accent">
		        <textarea mdInput placeholder="Accent Color">example</textarea>
		      </md-input-container>
		      <md-input-container color="warn">
		        <textarea mdInput placeholder="Warn Color">example</textarea>
		      </md-input-container>
		    </md-card-content>
		  </md-card>

		  <md-card class="demo-card demo-basic">
		    <md-toolbar color="primary">Hints</md-toolbar>
		    <md-card-content>
		      <h4>Input</h4>
		      <p>
		        <md-input-container class="demo-full-width">
		          <input mdInput
		                 #characterCountInputHintExample
		                 placeholder="Character count (100 max)"
		                 maxLength="100"
		                 value="Hello world. How are you?">
		          <md-hint align="end">{{characterCountInputHintExample.value.length}} / 100</md-hint>
		        </md-input-container>
		      </p>

		      <h4>Textarea</h4>
		      <p>
		        <md-input-container class="demo-full-width">
		          <textarea mdInput
		                    #characterCountTextareaHintExample
		                    placeholder="Character count (100 max)"
		                    maxLength="100">Hello world. How are you?</textarea>
		          <md-hint align="end">{{characterCountTextareaHintExample.value.length}} / 100</md-hint>
		        </md-input-container>
		      </p>
		    </md-card-content>
		  </md-card>

		  <md-card class="demo-card demo-basic">
		    <md-toolbar color="primary">
		      Hello&nbsp;
		      <md-input-container color="accent">
		        <input mdInput [(ngModel)]="name" type="text" placeholder="First name">
		      </md-input-container>,
		      how are you?
		    </md-toolbar>
		    <md-card-content>
		      <p>
		        <md-input-container>
		          <input mdInput disabled placeholder="Disabled field" value="Value">
		        </md-input-container>
		        <md-input-container>
		          <input mdInput required placeholder="Required field">
		        </md-input-container>
		      </p>
		      <p>
		        <md-input-container style="width: 100%">
		          <input mdInput placeholder="100% width placeholder">
		        </md-input-container>
		      </p>
		      <p>
		        <md-input-container style="width: 100%">
		          <input mdInput #input placeholder="Character count (100 max)" maxLength="100">
		          <md-hint align="end">{{input.value.length}} / 100</md-hint>
		        </md-input-container>
		      </p>
		      <p>
		        <md-input-container hintLabel="Hint label" style="width: 100%">
		          <input mdInput placeholder="Show Hint Label">
		        </md-input-container>
		      </p>

		      <p>
		        <md-input-container>
		          <input mdInput>
		          <md-placeholder>
		            I <md-icon>favorite</md-icon> <b>bold</b> placeholder
		          </md-placeholder>
		          <md-hint>
		            I also <md-icon>home</md-icon> <i>italic</i> hint labels
		          </md-hint>
		        </md-input-container>
		      </p>
		      <p>
		        <md-input-container hintLabel="Hint label" style="width: 100%">
		          <input mdInput #hintLabelWithCharCount placeholder="Show Hint Label With Character Count">
		          <md-hint align="end">{{hintLabelWithCharCount.value.length}}</md-hint>
		        </md-input-container>
		      </p>
		      <p>
		        <md-checkbox [(ngModel)]="color">Check to change the color:</md-checkbox>
		        <md-input-container [color]="color ? 'primary' : 'accent'">
		          <input mdInput [placeholder]="color ? 'Primary color' : 'Accent color'">
		        </md-input-container>
		      </p>
		      <p>
		        <md-checkbox [(ngModel)]="requiredField"> Check to make required:</md-checkbox>
		        <md-input-container>
		          <input mdInput
		                 [required]="requiredField"
		                 [placeholder]="requiredField ? 'Required field' : 'Not required field'">
		        </md-input-container>
		      </p>
		      <p>
		        <md-button-toggle-group [(ngModel)]="floatingLabel">
		          <md-button-toggle value="auto">Auto Float</md-button-toggle>
		          <md-button-toggle value="always">Always Float</md-button-toggle>
		          <md-button-toggle value="never">Never Float</md-button-toggle>
		        </md-button-toggle-group>
		      </p>

		      <p>
		        <md-input-container [floatPlaceholder]="floatingLabel">
		          <input mdInput placeholder="Placeholder">
		        </md-input-container>
		      </p>

		      <p>
		        <md-input-container>
		          <input mdInput placeholder="Prefixed" value="example">
		          <div mdPrefix>Example:&nbsp;</div>
		        </md-input-container>
		        <md-input-container align="end">
		          <input mdInput placeholder="Suffixed" value="123">
		          <span mdSuffix>.00 €</span>
		        </md-input-container>
		        <br/>
		        Both:
		        <md-input-container align="end">
		          <input mdInput #email placeholder="Email Address" value="angular-core">
		          <span mdPrefix><md-icon [class.primary]="email.focused">email</md-icon>&nbsp;</span>
		          <span mdSuffix [class.primary]="email.focused">&nbsp;@gmail.com</span>
		        </md-input-container>
		      </p>

		      <p>
		        Empty: <md-input-container><input mdInput></md-input-container>
		        <label>Label: <md-input-container><input mdInput></md-input-container></label>
		      </p>
		    </md-card-content>
		  </md-card>

		  <md-card class="demo-card demo-basic">
		    <md-toolbar color="primary">Number Inputs</md-toolbar>
		    <md-card-content>
		      <table width="100%">
		        <thead>
		        <td>Table</td>
		        <td colspan="3">
		          <button (click)="addABunch(5)">Add 5</button>
		          <button (click)="addABunch(10)">Add 10</button>
		          <button (click)="addABunch(100)">Add 100</button>
		          <button (click)="addABunch(1000)">Add 1000</button>
		        </td>
		        </thead>
		        <tr *ngFor="let item of items; let i = index">
		          <td>{{i+1}}</td>
		          <td>
		            <md-input-container>
		              <input mdInput
		                     type="number"
		                     placeholder="value"
		                     aria-label="hello"
		                     [(ngModel)]="items[i].value">
		            </md-input-container>
		          </td>
		          <td>
		            <input type="number" [(ngModel)]="items[i].value">
		          </td>
		          <td>{{item.value}}</td>
		        </tr>
		      </table>
		    </md-card-content>
		  </md-card>

		  <md-card class="demo-card demo-basic">
		    <md-toolbar color="primary">Forms</md-toolbar>
		    <md-card-content>
		      <md-input-container><input mdInput placeholder="reactive" ></md-input-container>
		      <md-input-container>
		        <input mdInput placeholder="template" [(ngModel)]="model" required [disabled]="ctrlDisabled">
		      </md-input-container>
		    </md-card-content>
		  </md-card>

		  <md-card class="demo-card demo-basic">
		    <md-toolbar color="primary">Textarea Autosize</md-toolbar>
		    <md-card-content>
		      <textarea mdTextareaAutosize class="demo-textarea"></textarea>
		      <div>
		        <md-input-container>
		          <textarea mdInput
		                    mdTextareaAutosize
		                    placeholder="Autosized textarea"></textarea>
		        </md-input-container>
		      </div>
		    </md-card-content>
		  </md-card>
		  </md-tab>
		  <md-tab label="Tab 3">Content 3</md-tab>
		  <md-tab label="Tab 4">Content 4</md-tab>
		  <md-tab label="Tab 5">Content 5</md-tab>

		</md-tab-group>
		</div>
	`
})
export class DirectorListNestedComponent implements OnInit {
	routeName:string;
	floatingLabel: string = 'auto';
	color: boolean;
	requiredField: boolean;
	ctrlDisabled = false;
	name: string;
	errorMessageExample1: string;
	errorMessageExample2: string;
	errorMessageExample3: string;
	items: any[] = [
	  { value: 10 },
	  { value: 20 },
	  { value: 30 },
	  { value: 40 },
	  { value: 50 },
	];
	rows = 8;
	model = 'hello';

	addABunch(n: number) {
	  for (let x = 0; x < n; x++) {
	    this.items.push({ value: ++max });
	  }
	}	
	constructor() {
		this.routeName = "Nested Route";
	}
	ngOnInit() {
		
	}
}