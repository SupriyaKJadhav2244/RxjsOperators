import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeofandformComponent } from './practiceofandform.component';

describe('PracticeofandformComponent', () => {
  let component: PracticeofandformComponent;
  let fixture: ComponentFixture<PracticeofandformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeofandformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeofandformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
