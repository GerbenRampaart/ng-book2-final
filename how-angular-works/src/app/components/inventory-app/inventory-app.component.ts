import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product/product.service';
@Component({
  selector: 'app-inventory-root',
  templateUrl: './inventory-app.component.html',
  styleUrls: ['./inventory-app.component.css'],
  providers: [ ProductService ]
})
export class InventoryAppComponent implements OnInit {

  private products : Array<Product>;

  constructor(private _productService : ProductService) { }

  ngOnInit() {
    this.products = this._productService.getProducts();
  }

  productWasSelected(product: Product) : void {
    console.log('Product clicked: ', product);
  }

}
