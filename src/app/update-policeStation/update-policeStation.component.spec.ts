import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePoliceStationComponent } from './update-policeStation.component';

describe('UpdatePatrolComponent', () => {
  let component: UpdatePoliceStationComponent;
  let fixture: ComponentFixture<UpdatePoliceStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePoliceStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePoliceStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
