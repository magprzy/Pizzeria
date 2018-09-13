import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ReactiveFormsModule} from '@angular/forms';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import {LoginGuard} from './login-guard';
import { DishListComponent } from './dish-list/dish-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzeriaComponent,
    MenuComponent,
    OrderComponent,
    LoginComponent,
    OrderSummaryComponent,
    OrderListComponent,
    OrderConfirmationComponent,
    DishListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
