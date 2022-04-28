import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AllCountriesRoutingModule } from './all-countries-routing.module';
import { AllCountriesComponent } from './all-countries.component';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllCountriesComponent
  ],
  imports: [
    CommonModule,
    // AllCountriesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AllCountriesModule { }
