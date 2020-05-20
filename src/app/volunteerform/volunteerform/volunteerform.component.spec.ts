import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerformComponent } from './volunteerform.component';

describe('VolunteerformComponent', () => {
  let component: VolunteerformComponent;
  let fixture: ComponentFixture<VolunteerformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
