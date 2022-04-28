import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  countries: Country[] = [];
  country!: Country;
  regions = [ 'africa', 'americas', 'asia', 'europe', 'oceania'];
  currentTheme = '';
  error = false;

  constructor( private countriesSvc: CountriesService, private fb: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.countriesSvc.getAll().subscribe( resp => {
      this.countries = resp;
    } );
  }

  searchCountry( text: string ) {
    if( text.length === 0 ) { return; }

    this.countriesSvc.getByName( text ).subscribe( resp => {
      this.error = false;
      this.countries = [];
      this.countries = resp.slice(0, 6);
    }, err => {
      this.error = true;
    } );
  }

  searchByRegion( region: string ) {
    this.countriesSvc.getByRegion( region ).subscribe( resp => {
      this.countries = [];
      this.countries = resp;
    })
  }

  searchByCode( code: string ) {
    this.router.navigate(['/country', code]);
  }
}
