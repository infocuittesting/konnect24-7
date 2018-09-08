import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasheringinhouseguestComponent } from './casheringinhouseguest.component';

describe('CasheringinhouseguestComponent', () => {
  let component: CasheringinhouseguestComponent;
  let fixture: ComponentFixture<CasheringinhouseguestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasheringinhouseguestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasheringinhouseguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
