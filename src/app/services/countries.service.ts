import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor( private http: HttpClient ) { }

  private baseUrl = environment.baseUrl;

  getAll() {
    return this.http.get<Country[]>(`${ this.baseUrl }/all?fields=flag,name,population,region,capital,alpha2Code`).pipe(
      map(resp => resp.slice(0, 60))
    );
  }

  getByName( name: string ) {
    return this.http.get<Country[]>(`${ this.baseUrl }/name/${ name }`);
  }

  getByCode( code: string ) {
    return this.http.get<Country>(`${ this.baseUrl }/alpha/${ code }`);
  }

  getByRegion( region: string ) {
    return this.http.get<Country[]>(`${ this.baseUrl }/region/${ region }`);
  }
}
