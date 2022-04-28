import { CountryComponent } from '../country.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountriesService } from '../../services/countries.service';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Country } from '../../models/country.model';
import { of } from 'rxjs';

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
  "name": "Albania",
  "alpha2Code": "AL",
  "capital": "Tirana",
  "region": "Europe",
  "population": 2837743,
  "flag": "https://flagcdn.com/al.svg",
  "independent": false
};
describe('Characters component', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;
  let service: CountriesService;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ CountryComponent ],
      imports: [
         HttpClientTestingModule,
         RouterTestingModule
         .withRoutes([
           {path: 'all-countries', component: MockComponent },
           { path: 'character/country', component: MockComponent},
           { path: 'country/col', component: MockComponent}
          ])
      ],
      providers: [
        CountriesService
      ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach( () =>{
    fixture = TestBed.createComponent( CountryComponent );
    component = fixture.componentInstance;
    fixture.detectChanges;
    service = fixture.debugElement.injector.get( CountriesService );
    // jest.spyOn(service, 'getAll').mockImplementation(() => of(mockCharacterslist));
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });
  it('ngOnInit', () => {
    const spy1 = jest.spyOn(component, 'ngOnInit');
    const spy = jest.spyOn(service, 'getByCode').mockReturnValue(of(mockCountry));
    component.ngOnInit();
    expect(spy1).toHaveBeenCalled();
    expect(component.country).toBeDefined();
  })
  it('goToHome', () => {
    const spy1 = jest.spyOn(component, 'goToHome');
    component.goToHome();
    expect(spy1).toHaveBeenCalled();
  })
});
