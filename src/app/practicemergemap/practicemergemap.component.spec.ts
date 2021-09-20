import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticemergemapComponent } from './practicemergemap.component';

describe('PracticemergemapComponent', () => {
  let component: PracticemergemapComponent;
  let fixture: ComponentFixture<PracticemergemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticemergemapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticemergemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
