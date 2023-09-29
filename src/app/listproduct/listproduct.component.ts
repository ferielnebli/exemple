import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProductService } from '../product.service';

@Component ({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  listproduct:any
  constructor(private Ps:ProductService) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
     this.Ps.getproducts().subscribe((res:any)=>{
      this.listproduct=res
      console.log("list product",this.listproduct)})

     }

     deletepro(id:any){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085D6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.Ps.deleteproduct(id).subscribe((res:any)=>{
            console.log(res)
          })
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          
        }
      })
     }
  }


