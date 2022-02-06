// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  // templateUrl: './header.component.html',
  // template inline
  template:`
    <mat-toolbar color="primary">
      <span>My Store</span>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
// export class HeaderComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

}
