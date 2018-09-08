import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueroomComponent } from './queueroom.component';

describe('QueueroomComponent', () => {
  let component: QueueroomComponent;
  let fixture: ComponentFixture<QueueroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
