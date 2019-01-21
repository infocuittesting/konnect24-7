import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurndownmanagementComponent } from './turndownmanagement.component';

describe('TurndownmanagementComponent', () => {
  let component: TurndownmanagementComponent;
  let fixture: ComponentFixture<TurndownmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurndownmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurndownmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
