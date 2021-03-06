# Angular 2.0

### Project Dependency

Nodejs Installed, if already installed skip that

### Installation

* npm install

* npm install @angular-cli - g (We are using angular-cli tool so need to install globally, if you have these tool installed already in global skip that)

### Running the Application

To run the app , we need to type 

ng serve --open

### Hierarchy use in Angular 2.0 structure: 

Unlike in angular1.x all the module loaded in the single library and we can’t isolate that one and for which the size is more. But In angular2 we can use the particular angular module on demand. As example below


###### @angular/common - commonly needed directives and services.

###### @angular/form - data binding and validation of input controls (When we want to use the form in the specific page that component we can defined specifically)

###### @angular/core - Here you get all the core module for the app

###### @angular/platform-browser/animations - As an alternate of ng-animate for navigation and other sliding page transition.


### Structure in Angular 2.0

* Addition of @ngModule in the new edition where we initialize and import all the component and declare directive and importing http module routing module and if we use material then need to import material module in the root stage using .forRoot(). 


* Now if we use sublime we can install typescript package along with John papa ng2 which gives you all the hint and syntax error for better code standard and free from misspelt. These typescript package check also runtime error so that easy to code.


* Now if we want to add scss to the app we can do by using cli

Using Sass with Angular2 using angular-cli

+ npm install node-sass --save-dev 
 
* To set the default css syntax follow these:

+ ng set defaults.styleExt scss

Now update in angular-cli.json,  update as


"defaults": {
     "styleExt": "scss",
}


Now add scss into your component using styleUrls: ['demo.scss'] as example. And angular-cli calls the webpack configuration which will compile the scss request to css 

In angular-cli we can test unit testing as well as end to end testing by checking the package.json and run the npm test and npm e2e respectively.


## 1.0 Please Note

 Here in angular-cli uses webpack with npm package.json. And since webpack works with npm for minifies bundle the html js font css and everything so we no need to do any gulp or any thirdparty module for optimization.

 ### 1.1 How Angular-cli works with webpack

 * Since ng takes care all the web pack in background and serve the application. These webpack config file is hidden if you can to see where the web pack config added just type ng-eject, this will create a webpack configuration file and now you can view and edit that file. 

 * But since we are using angular-cli project we will not use the command ng-eject. 
 In order to make any changes in the web pack configuration we use the modification in angular-cli.json , and these angular-cli.json called by the command ng-serve and in between all the properties in angular-cli calling the web pack dev server and bundle minify and optimize everything there.

### Angular Material2 Usage
Now,  npm install --save @angular/material


To inject the module import it in the module ts file

Say in the file name as app.module.ts

import { MaterialModule } from '@angular/material'

As material module is the core module of the app, we use at the main module using forRoot function keyword

Note in the angular 2 material2 md-button or md-menu-item cannot be used a component , you need to use the directive. For example to use md-button we need to add

<button md-button>Material 1 Button</button>

### Create a custom theme scss for the application

Create a custom theme file and save it into the application folder say in our file location (./src/app/app.theme.scss). And now we need to bind these web pack config. To do so we need to update the angular-cli.json . Just open the anular-cli.json and find:

      "styles": [
        "./app/app.theme.scss".  (Your custom theme file)
      ],


These theme file get called by angular-cli on the command ng serve, and then it binds with webpack request and serve.

So if we want to update the button primary pre build color we can do so . These is really helpful when we are overiding pre-build theme properties.



And regarding fusion chart support in angular4. There is a library angular2-fusionchart . But there is some problem on compilation time during typescript. So we raise the query on the development thread


FYI https://github.com/fusioncharts/angular2-fusioncharts/issues/10


They give us the solution on that and it works after that. But it will be fine after the next version release.

For the time being if you want to inject fusion chart on angular2/4, then

npm install angular2-fusioncharts --save

Next go to the folder node_modules->@types->fusioncharts->fusioncharts.charts.d.ts

and replace the total code to 

import { FusionChartStatic } from "fusioncharts";

declare var Charts: (H: FusionChartStatic) => FusionChartStatic;
export = Charts;
export as namespace Charts;


It will then works. 




[logo]: https://www.ag-grid.com/images/angular2.png

