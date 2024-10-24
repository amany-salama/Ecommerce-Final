import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart-services/cart.service';
import { Product } from '../interfaces/product';
import { CommonModule } from '@angular/common';
import { PaypalButtonComponent } from '../paypal-button/paypal-button.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  standalone:true,
  imports:[CommonModule , PaypalButtonComponent],
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements   OnInit {
  items: Product[]   = [];
  total: number = 0;
  clicked:boolean =false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.items.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0);
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.items = [];
    this.total = 0;
  }

}