import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpieceComponent } from './newpiece.component';

describe('NewpieceComponent', () => {
  let component: NewpieceComponent;
  let fixture: ComponentFixture<NewpieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
