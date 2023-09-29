import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ListcategorieComponent } from './listcategorie/listcategorie.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { DetailcategorieComponent } from './detailcategorie/detailcategorie.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatecategorieComponent } from './updatecategorie/updatecategorie.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    ListproductComponent,
    ListcategorieComponent,
    DetailproductComponent,
    DetailcategorieComponent,
    UpdateproductComponent,
    UpdatecategorieComponent,
    RegistercustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
