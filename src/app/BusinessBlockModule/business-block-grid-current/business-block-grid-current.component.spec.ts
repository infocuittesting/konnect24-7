import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBlockGridCurrentComponent } from './business-block-grid-current.component';

describe('BusinessBlockGridCurrentComponent', () => {
  let component: BusinessBlockGridCurrentComponent;
  let fixture: ComponentFixture<BusinessBlockGridCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessBlockGridCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessBlockGridCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
