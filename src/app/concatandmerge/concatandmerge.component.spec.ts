import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatandmergeComponent } from './concatandmerge.component';

describe('ConcatandmergeComponent', () => {
  let component: ConcatandmergeComponent;
  let fixture: ComponentFixture<ConcatandmergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatandmergeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatandmergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
