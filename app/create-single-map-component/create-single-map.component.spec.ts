import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSingleMapComponent } from './create-single-map.component';

describe('CreateSingleMapComponent', () => {
  let component: CreateSingleMapComponent;
  let fixture: ComponentFixture<CreateSingleMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSingleMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSingleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});