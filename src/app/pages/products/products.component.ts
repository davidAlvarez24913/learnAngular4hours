import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/share/services/shopping-cart.service';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  constructor(private productSVC: ProductsService, private shoppingCartSvc: ShoppingCartService) { }

  ngOnInit(): void {
    this.productSVC.getProducts().pipe(
      tap( (products: Product[]) => this.products = products)
    ).subscribe();
  }
  // escuchamos el evento
  addToCart(product: Product):void {

    console.log('Add to cart', product);
    this.shoppingCartSvc.updateCart(product);

  }
}