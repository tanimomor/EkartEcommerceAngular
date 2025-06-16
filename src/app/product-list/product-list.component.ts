import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  product = {
      name : 'Product 1',
      price : 100,
      discount: 20,
      description : 'This is a product description',
      image : 'https://via.placeholder.com/150',
      category : 'Electronics',
      brand : 'Brand 1',
      rating : 4.5,
      reviews : 100,
      stock : 100,
      availability : 'In Stock',
      pImage: 'assets/images/book.jpg'
    }

    getDiscountedPrice() {
      return this.product.price - (this.product.price * this.product.discount / 100);
    }
}