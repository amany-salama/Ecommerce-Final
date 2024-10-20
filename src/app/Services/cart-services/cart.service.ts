import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = []; // Array of products in the cart
  private cartItemCount = new BehaviorSubject(0);  // Observable to track cart count

  constructor() {}

  // Add product to cart
  addProduct(product: Product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.quantity! += 1; // If product exists, increment quantity
        added = true;
        break;
      }
    }
    if (!added) {
      product.quantity = 1; // If product is new, set quantity to 1
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1); // Update cart count
  }

  // Get all products in the cart
  getCart(): Product[] {
    return this.cart;
  }

  // Get total price of all items in the cart
  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  }

  // Get the cart item count as an observable
  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }

  // Remove a product from the cart
  removeFromCart(product: Product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        if (p.quantity! > 1) {
          p.quantity! -= 1; // Decrease quantity if more than 1
        } else {
          this.cartItemCount.next(this.cartItemCount.value - p.quantity!);
          this.cart.splice(index, 1); // Remove product if quantity is 1
        }
        break;
      }
    }
  }
  

  // Clear the cart
  clearCart() {
    this.cart = [];
    this.cartItemCount.next(0);
  }
}
