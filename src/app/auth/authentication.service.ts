
import { Injectable } from '@angular/core';
import { CartService } from '../Services/cart-services/cart.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  private users: any[] = [];
  private loggedInUser: any = null;

  constructor() {
  
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
  }

  register(email: string, password: string ): boolean {
    const userExists = this.users.find(user => user.email === email);
    if (userExists) {
      return false;
    }
    this.users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(this.users));
    return true;
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      this.loggedInUser = user;
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return this.loggedInUser !== null || localStorage.getItem('loggedInUser') !== null;
  }

  logout() {
    // Clear all data from localStorage
    localStorage.clear();
    console.log('Local storage cleared');
  }
   getUserCart() {
    return this.loggedInUser ? this.loggedInUser.cartItems : [];
  }
 updateUserCart(cartItems: any[]) {
    if (this.loggedInUser) {
      this.loggedInUser.cartItems = cartItems;
     
      localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
    }
  }

}
