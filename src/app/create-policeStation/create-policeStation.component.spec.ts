import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePoliceStationComponent } from './create-policeStation.component';

describe('CreatePoliceStationComponent', () => {
  let component: CreatePoliceStationComponent;
  let fixture: ComponentFixture<CreatePoliceStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePoliceStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePoliceStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
