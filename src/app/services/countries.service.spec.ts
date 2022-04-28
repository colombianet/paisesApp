import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CountriesService } from './countries.service';
import { Country } from '../models/country.model';
import { environment } from '../../environments/environment';

class MockComponent{}
const mocklistCountries: Country[] = [
  {
    "name": "Afghanistan",
    "alpha2Code": "AF",
    "capital": "Kabul",
    "region": "Asia",
    "population": 40218234,
    "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    "independent": false
  },
  {
    "name": "Åland Islands",
    "alpha2Code": "AX",
    "capital": "Mariehamn",
    "region": "Europe",
    "population": 28875,
    "flag": "https://flagcdn.com/ax.svg",
    "independent": false
  },
  {
    "name": "Albania",
    "alpha2Code": "AL",
    "capital": "Tirana",
    "region": "Europe",
    "population": 2837743,
    "flag": "https://flagcdn.com/al.svg",
    "independent": false
  },
  {
    "name": "Algeria",
    "alpha2Code": "DZ",
    "capital": "Algiers",
    "region": "Africa",
    "population": 44700000,
    "flag": "https://flagcdn.com/dz.svg",
    "independent": false
  }
];
const mockCountry: Country = {
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "capital": "Kabul",
  "region": "Asia",
  "population": 40218234,
  "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
  "independent": false
};
describe('Countries service', () => {
  let service: CountriesService;
  let httpMock : HttpTestingController;

  beforeEach( () => {
    TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
        ],
        providers: [
          CountriesService
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
      });
  });

  beforeEach( ()=> {
      service = TestBed.inject(CountriesService);
      httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach( ( ) => {
		httpMock.verify();
	});

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('getAll return a list of countries and does a get method', () => {
    service.getAll().subscribe((resp: Country[]) => {
        expect(resp).toEqual(mocklistCountries);
    }, err => {
      expect(err).toBeDefined()
    });

    const req = httpMock.expectOne(`${ environment.baseUrl }/all?fields=flag,name,population,region,capital,alpha2Code`);
    expect(req.request.method).toBe('GET');
    req.flush(mocklistCountries);
  });

  it('getByName return a list of countries and does a get method', () => {
    service.getByName('col').subscribe((resp: Country[]) => {
        expect(resp).toEqual(mocklistCountries);
    }, err => {
      expect(err).toBeDefined()
    });

    const req = httpMock.expectOne(`${ environment.baseUrl }/name/col`);
    expect(req.request.method).toBe('GET');
    req.flush(mocklistCountries);
  });

  it('getByCode return a country and does a get method', () => {
    service.getByCode('col').subscribe((resp: Country) => {
        expect(resp).toEqual(mockCountry);
    }, err => {
      expect(err).toBeDefined()
    });

    const req = httpMock.expectOne(`${ environment.baseUrl }/alpha/col`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCountry);
  });

  it('getByRegion return a list of countries and does a get method', () => {
    service.getByRegion('Asia').subscribe((resp: Country[]) => {
        expect(resp).toEqual(mocklistCountries);
    }, err => {
      expect(err).toBeDefined()
    });

    const req = httpMock.expectOne(`${ environment.baseUrl }/region/Asia`);
    expect(req.request.method).toBe('GET');
    req.flush(mocklistCountries);
  });
});
