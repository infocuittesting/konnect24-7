import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCreateBlockComponent } from './business-create-block.component';

describe('BusinessCreateBlockComponent', () => {
  let component: BusinessCreateBlockComponent;
  let fixture: ComponentFixture<BusinessCreateBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessCreateBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCreateBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
