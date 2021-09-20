import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeintervaladtimerComponent } from './practiceintervaladtimer.component';

describe('PracticeintervaladtimerComponent', () => {
  let component: PracticeintervaladtimerComponent;
  let fixture: ComponentFixture<PracticeintervaladtimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeintervaladtimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeintervaladtimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
