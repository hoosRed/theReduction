import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterPoliticsComponent } from './twitter-politics.component';

describe('TwitterPoliticsComponent', () => {
  let component: TwitterPoliticsComponent;
  let fixture: ComponentFixture<TwitterPoliticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterPoliticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterPoliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
