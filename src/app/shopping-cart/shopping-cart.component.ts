import { Component,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../Services/cart-services/cart.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartItems: any[] = []; // Declare cartItems
  totalPrice: number = 0; // Initialize totalPrice
  router = inject (Router);
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCart(); // Get items from cart service
    this.totalPrice = this.cartService.getTotalPrice(); // Get total price
  }

  // Remove item or decrease its quantity
  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.updateCart(); // Refresh the cart items and total price
  }

  // Update cart items and total price
  private updateCart() {
    this.cartItems = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  // Increase quantity
  increaseQuantity(product: any) {
    this.cartService.addProduct(product); // Re-add to cart to increase quantity
    this.updateCart(); // Refresh cart
  }

  // Decrease quantity
  decreaseQuantity(product: any) {
    this.cartService.removeFromCart(product); // Use the same remove method
    this.updateCart(); // Refresh cart
  }
  
  goToCheckout() {
    this.router.navigate(['/checkout']); // Navigate to checkout route
  }
}
