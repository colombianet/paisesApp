import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CountriesService } from '../services/countries.service';

import { Country } from '../models/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country!: Country;

  constructor( private aRoute: ActivatedRoute, private countriesSvc: CountriesService, private router: Router ) { }

  ngOnInit(): void {
    this.aRoute.params.subscribe( resp => {
      this.countriesSvc.getByCode( resp.code ).subscribe( resp => {
        this.country = resp;
      })
    })
  }

  goToHome() {
    this.router.navigate(['/all-countries']);
  }

}
