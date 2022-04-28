import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllCountriesComponent } from './pages/all-countries/all-countries.component';

const routes: Routes = [
    {
        path: 'all-countries',
        // loadChildren: () => import('../app/pages/all-countries/all-countries.module').then( m => m.AllCountriesModule )
        component: AllCountriesComponent
    },
    {
        path: 'country',
        loadChildren: () => import('../app/pages/country/country.module').then( m => m.CountryModule )
    },
    {
        path: '**',
        redirectTo: 'all-countries'
    }
];




@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}


