import { Routes } from '@angular/router';
import { NotFoundPage } from './Components/not-found-page/not-found-page';
import { HomePage } from './Components/home-page/home-page';

export const routes: Routes = [
    {
		path:"",
		redirectTo: "home" ,
		pathMatch: 'full'
	},

    {
        path:"home",
        component: HomePage
    }, 

    {
        path:"**",
        component: NotFoundPage
    }
];
