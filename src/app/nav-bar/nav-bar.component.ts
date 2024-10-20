import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { CartService } from '../Services/cart-services/cart.service'; //import
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  menuVisible = false;
  searchBarVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  toggleSearchBar() {
    this.searchBarVisible = !this.searchBarVisible;
  }



  //shopping cart counter
  cartItemCount: number = 0; 

  constructor(private CartService: CartService){}

  ngOnInit() {
    // Subscribe to cart item count observable to get the updated count
    this.CartService.getCartItemCount().subscribe(count =>{
      this.cartItemCount=count;
    });

}
}

