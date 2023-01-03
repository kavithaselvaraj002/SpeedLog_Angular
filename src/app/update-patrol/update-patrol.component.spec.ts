import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePatrolComponent } from './update-patrol.component';

describe('UpdatePatrolComponent', () => {
  let component: UpdatePatrolComponent;
  let fixture: ComponentFixture<UpdatePatrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePatrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePatrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
