import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  prod: Product[];
 
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  
  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.prod = products);
  }
}
