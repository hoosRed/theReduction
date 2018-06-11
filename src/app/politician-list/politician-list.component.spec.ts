import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticianListComponent } from './politician-list.component';

describe('PoliticianListComponent', () => {
  let component: PoliticianListComponent;
  let fixture: ComponentFixture<PoliticianListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticianListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticianListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
