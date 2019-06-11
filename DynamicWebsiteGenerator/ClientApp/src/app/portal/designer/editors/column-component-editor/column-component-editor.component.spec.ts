import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnComponentEditorComponent } from './column-component-editor.component';

describe('ColumnComponentEditorComponent', () => {
  let component: ColumnComponentEditorComponent;
  let fixture: ComponentFixture<ColumnComponentEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnComponentEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnComponentEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
