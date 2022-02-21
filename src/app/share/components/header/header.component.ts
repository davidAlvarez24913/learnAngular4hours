// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  // templateUrl: './header.component.html',
  // template inline
  template:`
    <mat-toolbar color="primary">
      <span>My Store </span>
      <span class="spacer"></span>
      <app-cart></app-cart>
  
       <!-- {{ quantity$ | async | json}} - Quantity
       {{ total$ | async | json}} - Total
       {{ cart$ | async | json}} - Cart -->

    </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
// export class HeaderComponent implements OnInit {\

  // quantity$  =this.shoppingCartSvc.quantityAction$;
  // total$ = this.shoppingCartSvc.totalAction$;
  // cart$ = this.shoppingCartSvc.cartAction$;

  // constructor(private shoppingCartSvc: ShoppingCartService) { }

  // ngOnInit(): void {
  // }

}
