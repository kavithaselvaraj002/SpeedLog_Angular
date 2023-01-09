import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceStationListComponent } from './policeStation-list.component';

describe('PoliceStationListComponent', () => {
  let component: PoliceStationListComponent;
  let fixture: ComponentFixture<PoliceStationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceStationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceStationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
