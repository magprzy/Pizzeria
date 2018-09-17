import {Component, OnInit} from '@angular/core';
import {Dish} from '../model/dish';
import {MenuService} from './/menu.service';
import {OrderService} from '../order/order.service';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];


  constructor(readonly dishService: MenuService, readonly orderService: OrderService, readonly loginService: LoginService) {
  }

  ngOnInit() {
    this.dishService.getAllDishes().subscribe(res => this.dishes = res);
  }

  select(type) {
    this.dishService.getSelectedDishes(type).subscribe(res => this.dishes = res);
  }

  addToCart(dish) {
    this.orderService.addDishToCart(dish);
  }


}



