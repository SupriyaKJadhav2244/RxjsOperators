import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeconcatmapComponent } from './practiceconcatmap.component';

describe('PracticeconcatmapComponent', () => {
  let component: PracticeconcatmapComponent;
  let fixture: ComponentFixture<PracticeconcatmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeconcatmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeconcatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
