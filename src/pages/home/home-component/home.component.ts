import { Component } from '@angular/core';
import { NavController, Events, MenuController } from 'ionic-angular';

import { AboutComponent } from '../../about/about-component/about.component';
import { FirebaseHomeComponent } from '../../firebase/firebase-home/firebase-home.component';
import { LoginComponent } from "../../login/login-component/login.component";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomeComponent {
	pages: Array<{title: string, component: any, icon: string, note: string, params?: any}>;
	constructor(
		private navController: NavController,
		private menuController: MenuController,
		private events: Events) {}

	ngOnInit() {
	  	this.pages = [
	      { title: 'ABOUT', component: AboutComponent, icon: 'photos', note: '' },
	      { title: 'Firebase', component: FirebaseHomeComponent, icon: 'flame', note: 'Firebase' },
	      { title: 'LOGIN', component: LoginComponent, icon: 'log-in', note: 'FireLogin' },
	    ];

	    this.events.subscribe('navigationEvent',(object) => {
	    	this.menuController.close();
				if (object.component) {
					this.navController.push(object.component, object.params);
				}
		});
	}

	openPage(page) {
		this.navController.push(page.component, page.params);
	}

}
