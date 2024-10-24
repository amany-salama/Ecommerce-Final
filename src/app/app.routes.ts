import { Routes,RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductlistComponent } from './ProductsComponents/productlist/productlist.component';
import { ProductDetailsComponent } from './ProductsComponents/product-details/product-details.component';
import { NewsComponent } from './news/news.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/auth.guard';
export const routes: Routes = [
{path:'home',component:HomePageComponent},
{ path:'products',component:ProductlistComponent},
{path:'details/:id',component:ProductDetailsComponent  },
{path:'news',component:NewsComponent},
{path:'contact',component:ContactUsComponent },
{path:'about',component:AboutComponent},
{ path:'shoppingcart',component:ShoppingCartComponent , canActivate: [AuthGuard]  },
{ path:'checkout',component:CheckoutComponent , canActivate: [AuthGuard] },
{path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
{path:"",redirectTo:"/home",pathMatch:"full"}
];
