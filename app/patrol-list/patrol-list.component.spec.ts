import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrolListComponent } from './patrol-list.component';

describe('PatrolListComponent', () => {
  let component: PatrolListComponent;
  let fixture: ComponentFixture<PatrolListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrolListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
