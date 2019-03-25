import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductComponent, ProductdetailsComponent, PagenotfoundComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule 
  ],
  exports:[
    ProductComponent,
    ProductdetailsComponent
  ]

})
export class ProductModule { }
