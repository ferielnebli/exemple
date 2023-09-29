import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) {
   }

   registercustomer(customer:any){
    return this.http.post(`${environment.baseurl}/users/customer/save`,customer)
   }

}
