import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBlockOptionsComponent } from './business-block-options.component';

describe('BusinessBlockOptionsComponent', () => {
  let component: BusinessBlockOptionsComponent;
  let fixture: ComponentFixture<BusinessBlockOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessBlockOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessBlockOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
