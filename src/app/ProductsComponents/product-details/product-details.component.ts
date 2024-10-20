import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Iproducts } from '../../interfaces/iproducts';
import { IProductsResponse } from '../../interfaces/iproducts';
import { ProductserviceService } from '../../Services/Product-services/productservice.service';
import { CartService } from '../../Services/cart-services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  
  productdetails: Iproducts | null = null;
  reviewHtml:string[]=[];
  constructor(private route: ActivatedRoute,
    private myservice:ProductserviceService,
    private cartService: CartService) {}
  @Input() product: Iproducts | null = null; //

  ngOnInit() {
    //Get product id from path
    // const idParam = this.route.snapshot.queryParamMap.get('id');
    const idParam = this.route.snapshot.paramMap.get('id');// to get the prameter form path
    const productId: number | null = idParam ? +idParam : null; // parsing to number
      if (productId !==null) {
      this.myservice.getproductbyid(productId).subscribe(data=>{
      console.log(data.id);
       this.productdetails=data;
       }) 
}
 }

  // Define the addToCart method -> shopping cart
    addToCart(product: Iproducts) {
    this.cartService.addProduct(product); 
      // alert(`${product.title} added to cart!`); 
    }
}

