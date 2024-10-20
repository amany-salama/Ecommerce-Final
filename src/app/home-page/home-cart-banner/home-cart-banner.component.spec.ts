import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCartBannerComponent } from './home-cart-banner.component';

describe('HomeCartBannerComponent', () => {
  let component: HomeCartBannerComponent;
  let fixture: ComponentFixture<HomeCartBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCartBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCartBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
