import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTestmonialComponent } from './home-testmonial.component';

describe('HomeTestmonialComponent', () => {
  let component: HomeTestmonialComponent;
  let fixture: ComponentFixture<HomeTestmonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTestmonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTestmonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
