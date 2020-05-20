import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedyformComponent } from './needyform.component';

describe('NeedyformComponent', () => {
  let component: NeedyformComponent;
  let fixture: ComponentFixture<NeedyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
