import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  outputs: [

  ]
})
export class ProductsListComponent implements OnInit {

  @Input()
  products: Array<Product>;

  currentProduct: Product;
  
  onProductSelected : EventEmitter<Product>;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product) : void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product) {
    if(!product || !this.currentProduct) {
      return false;
    }

    return product.sku === this.currentProduct.sku;
  }

  ngOnInit() {
  }

}
