import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouMightLikeComponent } from './you-might-like.component';

describe('YouMightLikeComponent', () => {
  let component: YouMightLikeComponent;
  let fixture: ComponentFixture<YouMightLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouMightLikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YouMightLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
