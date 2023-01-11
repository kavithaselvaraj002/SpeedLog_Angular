import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedVehicleComponent } from './assigned-vehicle.component';

describe('AssignedVehicleComponent', () => {
  let component: AssignedVehicleComponent;
  let fixture: ComponentFixture<AssignedVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});