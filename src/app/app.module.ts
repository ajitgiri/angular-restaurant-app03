import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDetailsComponent } from './component/home-details/home-details.component';
import { NewOrderComponent } from './component/new-order/new-order.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeDetailsComponent,
    NewOrderComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
