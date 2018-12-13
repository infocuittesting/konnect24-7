import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilestatisticsComponent } from './profilestatistics.component';

describe('ProfilestatisticsComponent', () => {
  let component: ProfilestatisticsComponent;
  let fixture: ComponentFixture<ProfilestatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilestatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilestatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
