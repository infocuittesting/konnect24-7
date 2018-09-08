import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommaintainComponent } from './roommaintain.component';

describe('RoommaintainComponent', () => {
  let component: RoommaintainComponent;
  let fixture: ComponentFixture<RoommaintainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoommaintainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoommaintainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
