import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertService } from '../services/alert.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
    private alertService: AlertService, 
    private productService: ProductService
  ) {}

  title = 'Product List';
  filterText = '';

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data;
    })
  }


  products: Product[] = [];

  addToCart = (product: Product) => {
    this.alertService.addToCartAlert(product.name);
  };
}
