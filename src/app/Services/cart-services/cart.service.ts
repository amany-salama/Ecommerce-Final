import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = []; // Array of products in the cart
  private cartItemCount = new BehaviorSubject(0);  // Observable to track cart count
  
  private updateLocalStorage() {
    try {
      localStorage.setItem('Angular18Local', JSON.stringify(this.cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }
  
  constructor() {
    const storedCart = localStorage.getItem('Angular18Local');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
      this.cartItemCount.next(this.cart.reduce((count, item) => count + (item.quantity || 1), 0)); // Update cart count
    }
  }

  // Add product to cart
  addProduct(product: Product) {
    const existingProduct = this.cart.find(p => p.id === product.id);

    if (existingProduct) {
      // If the product already exists, increment its quantity
      existingProduct.quantity! += 1;
    } else {
      // If product is new, set quantity to 1 and add to cart
      product.quantity = 1;
      this.cart.push(product);
    }

    this.updateLocalStorage();
    this.cartItemCount.next(this.cart.reduce((count, item) => count + (item.quantity || 1), 0)); // Update cart count
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
    const existingProductIndex = this.cart.findIndex(p => p.id === product.id);

    if (existingProductIndex !== -1) {
      const existingProduct = this.cart[existingProductIndex];
      if (existingProduct.quantity! > 1) {
        // Decrease quantity if more than 1
        existingProduct.quantity! -= 1;
      } else {
        // Remove product if quantity is 1
        this.cart.splice(existingProductIndex, 1);
      }

      this.updateLocalStorage();
      this.cartItemCount.next(this.cart.reduce((count, item) => count + (item.quantity || 1), 0)); // Update cart count
    }
  }

  // Clear the cart
  clearCart() {
    this.cart = [];
    this.cartItemCount.next(0);
    this.updateLocalStorage();
  }
}
