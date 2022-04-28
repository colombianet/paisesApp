import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentTheme = '';

  constructor( private countriesSvc: CountriesService ) { }

  ngOnInit(): void {
  }

}
