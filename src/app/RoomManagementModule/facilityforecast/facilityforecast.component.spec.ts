import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityforecastComponent } from './facilityforecast.component';

describe('FacilityforecastComponent', () => {
  let component: FacilityforecastComponent;
  let fixture: ComponentFixture<FacilityforecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityforecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
