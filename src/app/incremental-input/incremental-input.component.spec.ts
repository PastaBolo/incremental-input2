import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementalInputComponent } from './incremental-input.component';

describe('IncrementalInputComponent', () => {
  let component: IncrementalInputComponent;
  let fixture: ComponentFixture<IncrementalInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementalInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
