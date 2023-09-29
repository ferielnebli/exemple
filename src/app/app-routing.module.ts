import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailcategorieComponent } from './detailcategorie/detailcategorie.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { ListcategorieComponent } from './listcategorie/listcategorie.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { UpdatecategorieComponent } from './updatecategorie/updatecategorie.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'list',component:ListproductComponent},
  {path:'listcat',component:ListcategorieComponent},
  {path:'detail/:id',component:DetailproductComponent},
  {path:'detailcat/:id',component:DetailcategorieComponent},
  {path:'update/:id',component:UpdateproductComponent},
  {path:'updatecat/:id',component:UpdatecategorieComponent},
  {path:'register',component:RegistercustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
