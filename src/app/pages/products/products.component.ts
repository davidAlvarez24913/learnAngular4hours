import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ProductsService } from './services/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productSVC: ProductsService) { }

  ngOnInit(): void {
    this.productSVC.getProducts().pipe(
      tap( res => console.log(res))
    ).subscribe();
  }

}