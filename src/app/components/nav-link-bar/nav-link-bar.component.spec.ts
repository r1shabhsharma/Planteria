import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinkBarComponent } from './nav-link-bar.component';

describe('NavLinkBarComponent', () => {
  let component: NavLinkBarComponent;
  let fixture: ComponentFixture<NavLinkBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLinkBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLinkBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
