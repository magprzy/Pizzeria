import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DishesListComponent} from './dishes-list/dishes-list.component';
import {LoginComponent} from './login/login.component';
import {PizzeriaComponent} from './pizzeria/pizzeria.component';
import {OrderComponent} from './order/order.component';
import {OrderSummaryComponent} from './order-summary/order-summary.component';

const routes: Routes = [
  {path: 'menu', component: DishesListComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: PizzeriaComponent},
  {path: 'order', component: OrderComponent},
  {path: 'order-summary', component: OrderSummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
