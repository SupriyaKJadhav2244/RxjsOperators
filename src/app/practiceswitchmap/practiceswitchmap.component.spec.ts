import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeswitchmapComponent } from './practiceswitchmap.component';

describe('PracticeswitchmapComponent', () => {
  let component: PracticeswitchmapComponent;
  let fixture: ComponentFixture<PracticeswitchmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeswitchmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeswitchmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
