import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddsGridComponent } from './odds-grid.component';

describe('OddsGridComponent', () => {
  let component: OddsGridComponent;
  let fixture: ComponentFixture<OddsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
