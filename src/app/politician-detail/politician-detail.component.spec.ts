import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticianDetailComponent } from './politician-detail.component';

describe('PoliticianDetailComponent', () => {
  let component: PoliticianDetailComponent;
  let fixture: ComponentFixture<PoliticianDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticianDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticianDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
