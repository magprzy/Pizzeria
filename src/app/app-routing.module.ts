import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {Menu} from './menu/menu';
import {MenuComponent} from './menu/menu.component';
import {LoginComponent} from './login/login.component';
import {PizzeriaComponent} from './pizzeria/pizzeria.component';
import {OrderComponent} from './order/order.component';
import {OrderSummaryComponent} from './order-summary/order-summary.component';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderConfirmationComponent} from './order-confirmation/order-confirmation.component';
import {LoginGuard} from './login-guard';
import {DishListComponent} from './dish-list/dish-list.component';
import {OrderDetailsComponent} from './order-details/order-details.component';
import {DishDetailsComponent} from './dish-details/dish-details.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: PizzeriaComponent},
  {path: 'order', component: OrderComponent},
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: 'order-list', component: OrderListComponent, canActivate: [LoginGuard]},
  {path: 'notification', component: OrderConfirmationComponent, outlet: 'popup'},
  {path: 'dish-list', component: DishListComponent, canActivate: [LoginGuard]},
  {path: 'order-details/:id', component: OrderDetailsComponent, canActivate: [LoginGuard]},
  {path: 'dish-details/:id', component: DishDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
