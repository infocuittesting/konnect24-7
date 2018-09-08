import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearpickerComponent } from './yearpicker.component';

describe('YearpickerComponent', () => {
  let component: YearpickerComponent;
  let fixture: ComponentFixture<YearpickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearpickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
