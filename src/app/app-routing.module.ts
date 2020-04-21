import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDetailsComponent } from './component/home-details/home-details.component';
import { NewOrderComponent } from './component/new-order/new-order.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';


const routes: Routes = [
  {path:'',redirectTo:'homeDetails',pathMatch:'full'},
  {path:'homeDetails',component: HomeDetailsComponent},
  {path:'orderDetails',component: OrderDetailsComponent},
  {path:'orderDetails',children:[
    {path:'newOrder',component: NewOrderComponent}  
    // {path:'edit/:id',component:OrderComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
