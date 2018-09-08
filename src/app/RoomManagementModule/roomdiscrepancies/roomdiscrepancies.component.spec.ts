import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomdiscrepanciesComponent } from './roomdiscrepancies.component';

describe('RoomdiscrepanciesComponent', () => {
  let component: RoomdiscrepanciesComponent;
  let fixture: ComponentFixture<RoomdiscrepanciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomdiscrepanciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomdiscrepanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
