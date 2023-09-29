import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
id=this.activeroute.snapshot.params["id"]
product:any
  constructor(private activeroute:ActivatedRoute ,private Ps:ProductService) { }

  ngOnInit(): void {
   console.log("id",this.id)

   this.GetOneProduct()

  }

  GetOneProduct(){
    this.Ps.getOnepr(this.id).subscribe((res:any)=>{
      this.product=res
      console.log("detail product",this.product)
    })
  }
}
