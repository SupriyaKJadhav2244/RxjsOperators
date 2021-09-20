import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticefromeventComponent } from './practicefromevent.component';

describe('PracticefromeventComponent', () => {
  let component: PracticefromeventComponent;
  let fixture: ComponentFixture<PracticefromeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticefromeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticefromeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
