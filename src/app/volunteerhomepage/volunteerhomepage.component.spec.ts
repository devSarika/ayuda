import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerhomepageComponent } from './volunteerhomepage.component';

describe('VolunteerhomepageComponent', () => {
  let component: VolunteerhomepageComponent;
  let fixture: ComponentFixture<VolunteerhomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerhomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
