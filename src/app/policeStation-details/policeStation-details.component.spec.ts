import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceStationDetailsComponent } from './policeStation-details.component';

describe('PoliceStationDetailsComponent', () => {
  let component: PoliceStationDetailsComponent;
  let fixture: ComponentFixture<PoliceStationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceStationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceStationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
