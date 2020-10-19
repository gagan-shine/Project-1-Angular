import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { TransactionsComponent } from './components/transactions.component';



const appRoutes: Routes = [
	{
		path:'',
		component:TransactionsComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);