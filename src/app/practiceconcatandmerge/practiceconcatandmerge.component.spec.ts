import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeconcatandmergeComponent } from './practiceconcatandmerge.component';

describe('PracticeconcatandmergeComponent', () => {
  let component: PracticeconcatandmergeComponent;
  let fixture: ComponentFixture<PracticeconcatandmergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeconcatandmergeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeconcatandmergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
