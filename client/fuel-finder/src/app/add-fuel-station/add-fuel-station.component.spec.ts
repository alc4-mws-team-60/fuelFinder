import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFuelStationComponent } from './add-fuel-station.component';

describe('AddFuelStationComponent', () => {
  let component: AddFuelStationComponent;
  let fixture: ComponentFixture<AddFuelStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFuelStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFuelStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
