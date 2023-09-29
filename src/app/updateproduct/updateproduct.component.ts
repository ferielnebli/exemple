import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
id=this.activeroute.snapshot.params["id"]
product:any
productform:FormGroup

  constructor(private formbuilder:FormBuilder ,private activeroute:ActivatedRoute , private Ps:ProductService ,private route:Router) { }

  ngOnInit(): void {
    this.productform=this.formbuilder.group({
      name:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required]
    })
    this.GetOneproduct()
  }

  GetOneproduct(){
    this.Ps.getOnepr(this.id).subscribe((res:any)=>{
      this.product=res
      console.log('detail product',this.product)

      this.productform.patchValue({
        name:this.product.name,
        price:this.product.price,
        description:this.product.description
    
      })
    })
  }

  updateproduct(){
    this.Ps.updatePro(this.id,this.productform.value).subscribe((res:any)=>{
    console.log(res)
    Swal.fire("product upadted!")
    this.route.navigateByUrl("/list")
  
     })
  }
}
