import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductShopComponent } from './product-shop/product-shop.component';

const routes: Routes =
  [{ path: 'products/:productId', component: ProductShopComponent },
  { path: 'products', component: ProductDetailsComponent },
  { path: 'cart', component: CartItemsComponent },
  { path: '', component: ProductDetailsComponent },
  { path: 'checkout', component: CheckoutFormComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
