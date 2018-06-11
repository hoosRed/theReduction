import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRComponent } from './signup-r.component';

describe('SignupRComponent', () => {
  let component: SignupRComponent;
  let fixture: ComponentFixture<SignupRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
