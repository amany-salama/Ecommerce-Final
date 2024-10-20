import { Component } from '@angular/core';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { FeatureComponent } from './feature/feature.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { HomeCartBannerComponent } from './home-cart-banner/home-cart-banner.component';

import { HomeAddverComponent } from './home-addver/home-addver.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeSliderComponent,
  FeatureComponent,
  HomeProductsComponent,
  HomeCartBannerComponent,
 
  HomeAddverComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
