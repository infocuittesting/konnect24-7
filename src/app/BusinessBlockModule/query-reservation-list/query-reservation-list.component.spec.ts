import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryReservationListComponent } from './query-reservation-list.component';

describe('QueryReservationListComponent', () => {
  let component: QueryReservationListComponent;
  let fixture: ComponentFixture<QueryReservationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryReservationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryReservationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
