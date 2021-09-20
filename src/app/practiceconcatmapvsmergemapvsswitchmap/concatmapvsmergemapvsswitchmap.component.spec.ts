import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatmapvsmergemapvsswitchmapComponent } from './concatmapvsmergemapvsswitchmap.component';

describe('ConcatmapvsmergemapvsswitchmapComponent', () => {
  let component: ConcatmapvsmergemapvsswitchmapComponent;
  let fixture: ComponentFixture<ConcatmapvsmergemapvsswitchmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatmapvsmergemapvsswitchmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatmapvsmergemapvsswitchmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
