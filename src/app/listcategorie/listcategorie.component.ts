import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-listcategorie',
  templateUrl: './listcategorie.component.html',
  styleUrls: ['./listcategorie.component.css']
})
export class ListcategorieComponent implements OnInit {
 
  listcategorie:any
  constructor(private CS:CategorieService) { }

  ngOnInit(): void {

    this.getCategorie()
  }

  getCategorie(){

  this.CS.getCategories().subscribe((res:any)=>{
    
  this.listcategorie=res
  console.log("list categorie",this.listcategorie)})
}


deleteCat(id:any){
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
      this.CS.deletecategorie(id).subscribe((res:any)=>{
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
