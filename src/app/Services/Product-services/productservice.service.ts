import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts, IProductsResponse} from '../../interfaces/iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient ) { }
  apiurl="https://dummyjson.com/products"
  // get all products from api//
  getallproducts():Observable<IProductsResponse>{
    return this.http.get<IProductsResponse>(this.apiurl); 
  }

  //get productbyid from api//
    // getproductbyid(productId:number):Observable<Iproducts>{
    // const apiurl=`https://dummyjson.com/products/${productId}`
    // return this.http.get<Iproducts>(this.apiurl); 

    getproductbyid(productId: number): Observable<Iproducts> {
      return this.http.get<Iproducts>(`${this.apiurl}/${productId}`);
      // return this.http.get<Iproducts>(`${this.apiurl}/products/${productId}`);
    }
  }

