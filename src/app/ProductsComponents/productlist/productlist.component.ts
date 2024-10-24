import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../../Services/Product-services/productservice.service';
import { CommonModule } from '@angular/common';
import { Iproducts } from '../../interfaces/iproducts';
import { CartService } from '../../Services/cart-services/cart.service';
import { RouterModule } from '@angular/router';
import {MatTooltipModule}from '@angular/material/tooltip';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule,RouterModule,MatTooltipModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit {
  productlist:Iproducts[]=[];
  filteredProducts:Iproducts[]=[];
  categories = [
    { title: 'All', filter: '*' },
    { title: 'Beauty', filter: 'beauty' },
    { title: 'Fragrance', filter: 'fragrances' },
    { title: 'Furniture', filter: 'furniture' },
    { title: 'Grocery', filter: 'groceries' }
  ];
  activeFilter: string = '*';
  // searchTerm = '';
  // selectedCategory = '';
  trackById(index: number, item: any): number {
    return item.id;
  }
  constructor(private myservice:ProductserviceService, private cartService: CartService ){}
    
ngOnInit() {
  this.myservice.getallproducts().subscribe(data=>{
      console.log(data.products);
    this.productlist=data.products;
    this.filteredProducts = this.productlist;
    })
  }

  ///apply filter ///////////
  applyFilter(filter: string): void {
    this.activeFilter = filter;
    console.log('Active Filter:', filter);
   // Add filtering logic here if necessary
    this.activeFilter = filter;
    if (filter == '*') {
      this.filteredProducts = this.productlist;
    } else {
      this.filteredProducts = this.productlist.filter(product => product.category == filter);
    }
    console.log(this.filteredProducts)
  }
  // method for styling
  isActive(filter: string): boolean {
    return this.activeFilter == filter;
  }
  // Define the addToCart method -> shopping cart
   addToCart(product: Iproducts) {
  this.cartService.addProduct(product); 
    // alert(`${product.title} added to cart!`); 
  }
 

  //define Thegetproductbyid function-- to show product details//
    getproductbyid(productId:number){
    this.myservice.getproductbyid(productId)
  }
//////////////////////////////////////////////
  //Filterproguct by category
  
    //   filterProducts() {
    //   this.filteredProducts = this.productlist.filter(product =>
    //     product.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
    //     (this.selectedCategory === '' || product.category === this.selectedCategory)

    //   );
    // }
//sort products
    // sortProducts(sortBy: string) {
    //   this.filteredProducts.sort((a, b) => {
    //     if (sortBy === 'price') {
    //       return a.price - b.price;
    //     } else if (sortBy === 'title') {
    //       return a.title.localeCompare(b.title);   

    //     }
    //     return 0;
    //   });
    // }
}




