import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralconfigurationComponent } from './generalconfiguration.component';

describe('GeneralconfigurationComponent', () => {
  let component: GeneralconfigurationComponent;
  let fixture: ComponentFixture<GeneralconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
