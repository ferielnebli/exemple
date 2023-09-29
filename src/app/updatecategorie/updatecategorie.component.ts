import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-updatecategorie',
  templateUrl: './updatecategorie.component.html',
  styleUrls: ['./updatecategorie.component.css']
})
export class UpdatecategorieComponent implements OnInit {
  id=this.activeroute.snapshot.params["id"]
  categorie:any
  categorieform:FormGroup
  
    constructor(private formbuilder:FormBuilder ,private activeroute:ActivatedRoute , private Cs:CategorieService ,private route:Router) { }
  
    ngOnInit(): void {
      this.categorieform=this.formbuilder.group({
        title:['',Validators.required],
        description:['',Validators.required]
      })
      this.GetOnecategorie()
    }
  
    GetOnecategorie(){
      this.Cs.getOneCat(this.id).subscribe((res:any)=>{
        this.categorie=res
        console.log('detail categorie',this.categorie)
  
        this.categorieform.patchValue({
          title:this.categorie.title,
          description:this.categorie.description
      
        })
      })
    }
  
    updatecategory(){
      this.Cs.updateCat(this.id,this.categorieform.value).subscribe((res:any)=>{
      console.log(res)
      Swal.fire("product upadted!")
      this.route.navigateByUrl("/listcat")
    
       })
    }
  }
  
