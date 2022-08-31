import { Component, OnInit } from '@angular/core';
import { products } from 'src/data/products';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product = products;

  constructor() { }

  ngOnInit(): void {
  }


  // clickMe() {
  //   window.alert("Course Videos Are Available");
  // }

}
