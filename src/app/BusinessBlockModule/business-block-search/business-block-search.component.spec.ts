import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBlockSearchComponent } from './business-block-search.component';

describe('BusinessBlockSearchComponent', () => {
  let component: BusinessBlockSearchComponent;
  let fixture: ComponentFixture<BusinessBlockSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessBlockSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessBlockSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
