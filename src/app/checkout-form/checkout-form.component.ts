import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';
// // import mysql from "mysql2";
// import * as dotenv from "dotenv";
// dotenv.config();

// export const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PWD,
//   database: process.env.DB_NAME
// });
@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
msg : string ="gmail.com"
contact = new Contact();
  constructor() { }

  ngOnInit(): void {
  }

  submit(form)
  {
    this.contact.firstname = form.firstName;
    this.contact.lastname = form.lastName; 
    this.contact.email = form.email;  
    window.alert("Cart is successfully Submitted")
console.log(form);
  }
}
