import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from '../country.component';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [
    CountryComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    MaterialModule
  ]
})
export class CountryModule { }
