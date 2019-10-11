import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelStationListComponent } from './fuel-station-list.component';

describe('FuelStationListComponent', () => {
  let component: FuelStationListComponent;
  let fixture: ComponentFixture<FuelStationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelStationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelStationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
