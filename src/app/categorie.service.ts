import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }


  getCategories(){
    return this.http.get(`${environment.baseurl}/users/category/all`)
  }
  
  deletecategorie(id:any){
    return this.http.delete(`${environment.baseurl}/users/category/delete/${id}`)
  }

  getOneCat(id:any){
    return this.http.get(`${environment.baseurl}/users/category/one/${id}`)
  }
  
  updateCat(id:any,categorie:any){
    return this.http.put(`${environment.baseurl}/users/category/update/${id}`,categorie)
  }




}
