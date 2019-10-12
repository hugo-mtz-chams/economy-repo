import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { ProductCardsComponent } from './product-cards/product-cards.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        NgxDatatableModule,
        NgbModule,
        EcommerceRoutingModule,
    ],
    declarations: [ ProductCardsComponent, ProductDetailsComponent, ProductCartComponent, CheckoutComponent]
})
export class EcommerceModule { }
