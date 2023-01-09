import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrolDetailsComponent } from './patrol-details.component';

describe('PatrolDetailsComponent', () => {
  let component: PatrolDetailsComponent;
  let fixture: ComponentFixture<PatrolDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrolDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrolDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
