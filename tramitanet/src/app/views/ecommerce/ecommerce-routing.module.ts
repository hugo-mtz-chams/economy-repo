import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductCardsComponent } from './product-cards/product-cards.component';

const routes: Routes = [
    {
        path: 'products',
        component: ProductCardsComponent
    },
    {
        path: 'product-details',
        component: ProductDetailsComponent
    },
    {
        path: 'cart',
        component: ProductCartComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EcommerceRoutingModule { }
