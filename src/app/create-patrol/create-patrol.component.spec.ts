import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePatrolComponent } from './create-patrol.component';

describe('CreatePatrolComponent', () => {
  let component: CreatePatrolComponent;
  let fixture: ComponentFixture<CreatePatrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePatrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePatrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
