import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationoptionComponent } from './reservationoption.component';

describe('ReservationoptionComponent', () => {
  let component: ReservationoptionComponent;
  let fixture: ComponentFixture<ReservationoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
