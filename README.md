# AngularRestaurantApp03
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

========================================
Project Works:
	Add Bootstrap 4:
		npm install --save bootstrap
			This will also add the bootstrap package to package.json.
			The Bootstrap 4 assets will be installed in the node_modules/bootstrap folder.
	Add JQuery:
		npm install --save jquery
			This will also add the JQuery package to package.json.
	Add Font Awesome:
		npm install @fortawesome/angular-fontawesome@0.6.1  
			Here for Angular 9 supported version is 0.6.x
			This will also add the Font Awesome to package.json.
	Add Popper.js:
		npm install popper.js --save
		This will also add the Popper JS to package.json.
	
	Now finally add those to angular.json file :
		[{
		 "styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.css",
              "src/styles.css"
            ],
            "scripts": [
              "./node_modules/jquery/dist/jquery.js",
              "./node_modules/bootstrap/dist/js/bootstrap.js"
            ]
		}]
		
Note: Should I add bootstrap.js or bootstrap.min.js to my project? 
	( ANS )No, the goal of ng-bootstrap is to completely replace JavaScript implementation for components. Nor should you include other dependencies like jQuery or popper.js. It is not necessary and might interfere with ng-bootstrap code/ ngx-bootstrap.

		[{
			Bootstrap depends on jQuery and Popper.js libraries, and if you don't include them in your project, any Bootstrap components that rely on JavaScript will not work.

			Why not include those libs? For Angular it's better to avoid using libraries that make direct manipulation of the DOM (like jQuery) and let Angular handle that.

			Now what if you need the complete features of Bootstrap 4 without the JS libraries?

			A better way is to use component libraries created for the sake of making Bootstrap work seamlessly with Angular such as ng-bootstrap or ngx-bootstrap
		}]
		
	Now run : ng serve -o -> To test the application by https://localhost:4200
	
	Add Font  Awesome:
		npm install font-awesome --save
		
	Create Componets :
		home			: ng g c component/homeDetails -s [-s for no create the .css file]
		newOrder 		: ng g c component/newOrder		[order-items]
		orderDetails	: ng g c component/orderDetails	[orders]
		
	Now Test the application after doing all the code changes by : ng serve -o
	
	Now Pushed the project to GitHub:
	--------------------------------
	Create the project in GitHub, without Create and initialize README file
	Go to the project root folder and Right Clik and open: Git Bash here
		<- git init
		<- git remote add origin https://github.com/ajitgiri/angular-restaurant-app03.git
		<- git remote -v :To check the permisions like (fetch/push)
		<- git add . : To add all the files to the index to pushed them to remore repository
		<- git commit -m "This is my initial Push to Repository"
		<- git push origin master 
		
	Now Start containerization of this application:
	----------------------------------------------	
		Create Docker file : DockerFile
		Create .dockeringnor file: .dockeringnor
		Create NGINX Config File: nginx.conf # for the NGINX Server routing and start up file
		Build and package the code for deploy: ng build --prod
		Follow these bellow build and run Docker Image:
			Open the Shell/cmd promt and navigate to the project root folder
			ddocker build -t ajitkumardockerhub/angular-restaurant-app03:v1 . # Here Don't forgot to provide dockerid/image name
			docker run -p 8088:80 --name angular-restaurant-app03V1 -d angular-restaurant-app03:v1
		Test the Application: Use Different Browser like FireFox and clean the catch :	http://localhost:8088
		Pushed the created image to the Docker Hub: docker push ajitkumardockerhub/angular-restaurant-app03:v1 
			
	Now push all these Dockerisation related code to the GitHub:
	-----------------------------------------------------------
	Go to the project root folder and Right Clik and open: Git Bash here
		: git add . 
		: git status 
		: git commit -m "pushing dockerized details with respected files" 
		: git push origin master

### DONE ###
		