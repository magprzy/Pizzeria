import {Component, OnInit} from '@angular/core';
import {Dish} from '../model/dish';
import {MenuService} from './/menu.service';
import {OrderService} from '../order/order.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  isAvailable: true;

  constructor(readonly dishService: MenuService, readonly orderService: OrderService) {
  }

  ngOnInit() {
    this.dishService.getAllDishes().subscribe(res => this.dishes = res);
  }

  ngSelect(type) {
    this.dishService.getSelectedDishes(type).subscribe(res => this.dishes = res);
  }

  addToCart(dish) {
    this.orderService.addDishToCart(dish);
  }

  /*changeAvailability(dish) {
  this.orderService.changeAvailability(dish);
  }*/


}



