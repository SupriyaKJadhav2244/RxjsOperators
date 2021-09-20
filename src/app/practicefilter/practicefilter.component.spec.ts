import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticefilterComponent } from './practicefilter.component';

describe('PracticefilterComponent', () => {
  let component: PracticefilterComponent;
  let fixture: ComponentFixture<PracticefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticefilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
