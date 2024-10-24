import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { Navbar2Component } from './navbar-2/navbar-2.component';

import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductlistComponent } from './ProductsComponents/productlist/productlist.component';
import { PaypalButtonComponent } from './paypal-button/paypal-button.component'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    PaypalButtonComponent,
    RouterModule,
    NavBarComponent, 
    PreLoaderComponent,
    HomePageComponent,
    FooterComponent,
    Navbar2Component,
    ProductlistComponent,
    NewsComponent,
    AboutComponent,
    ContactUsComponent,
    ShoppingCartComponent,
    CheckoutComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce';
}
