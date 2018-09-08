import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchandeditreservationComponent } from './searchandeditreservation.component';

describe('SearchandeditreservationComponent', () => {
  let component: SearchandeditreservationComponent;
  let fixture: ComponentFixture<SearchandeditreservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchandeditreservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchandeditreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
