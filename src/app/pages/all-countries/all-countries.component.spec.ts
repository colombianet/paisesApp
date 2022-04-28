import { AllCountriesComponent } from './all-countries.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountriesService } from '../../services/countries.service';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Country } from '../../models/country.model';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';

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
describe('Characters component', () => {
  let component: AllCountriesComponent;
  let fixture: ComponentFixture<AllCountriesComponent>;
  let service: CountriesService;
  let formBuilder: FormBuilder;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ AllCountriesComponent ],
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
        CountriesService,
        FormBuilder
      ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach( () =>{
    fixture = TestBed.createComponent( AllCountriesComponent );
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    fixture.detectChanges;
    service = fixture.debugElement.injector.get( CountriesService );
    // jest.spyOn(service, 'getAll').mockImplementation(() => of(mockCharacterslist));
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });
  it('ngOnInit', () => {
    const spy1 = jest.spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(spy1).toHaveBeenCalled();
  })
  it('getAll', () => {
    const spy = jest.spyOn(service, 'getAll').mockReturnValue(of(mocklistCountries));
    component.getAll();
    expect(component.countries.length).toBe(4);
  })
  it('searchCountry', () => {
    const spy = jest.spyOn(service, 'getByName').mockReturnValue(of(mocklistCountries));
    component.searchCountry('col');
    expect(component.countries.length).toBe(4);
    component.searchCountry('');
  })
  it('searchByRegion', () => {
    const spy = jest.spyOn(service, 'getByRegion').mockReturnValue(of(mocklistCountries));
    component.searchByRegion('Asia');
    expect(component.countries.length).toBe(4);
  })
  it('searchByCode', () => {
    const spy = jest.spyOn(component, 'searchByCode');
    component.searchByCode('col');
    expect(spy).toHaveBeenCalled();
  })
});
