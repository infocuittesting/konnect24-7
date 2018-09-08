import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesearchComponent } from './profilesearch.component';

describe('ProfilesearchComponent', () => {
  let component: ProfilesearchComponent;
  let fixture: ComponentFixture<ProfilesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
