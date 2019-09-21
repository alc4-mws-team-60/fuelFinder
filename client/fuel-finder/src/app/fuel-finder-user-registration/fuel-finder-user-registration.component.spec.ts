import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelFinderUserRegistrationComponent } from './fuel-finder-user-registration.component';

describe('FuelFinderUserRegistrationComponent', () => {
  let component: FuelFinderUserRegistrationComponent;
  let fixture: ComponentFixture<FuelFinderUserRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelFinderUserRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelFinderUserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
