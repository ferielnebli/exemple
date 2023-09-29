import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getproducts(){
    return this.http.get(`${environment.baseurl}/users/product/all`)
  }

  deleteproduct(id:any){
    return this.http.delete(`${environment.baseurl}/users/product/delete/${id}`)
  }


  updatePro(id:any,product:any){
    return this.http.put(`${environment.baseurl}/users/product/update/${id}`,product)
  }

  getOnepr(id:any){
    return this.http.get(`${environment.baseurl}/users/product/getone/${id}`)
  }

}
