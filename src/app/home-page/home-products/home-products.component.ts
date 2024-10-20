import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductserviceService } from '../../Services/Product-services/productservice.service';

@Component({
  selector: 'app-home-products',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.css'
})
export class HomeProductsComponent implements OnInit{
  productlist:any
  constructor(private myservice:ProductserviceService){
    this.productlist=this.myservice
  }
ngOnInit() {
  this.myservice.getallproducts().subscribe(data=>{

    console.log(data);
    this.productlist=data
    })
  
}
}
