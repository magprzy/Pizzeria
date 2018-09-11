import {Component, OnInit} from '@angular/core';
import {Dish} from '../model/dish';
import {DishesListService} from '../dishes-list/dishes-list.service';
import {OrderService} from '../order/order.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss']
})
export class DishesListComponent implements OnInit {
  dishes: Dish[];

  constructor(readonly dishService: DishesListService, readonly orderService: OrderService) {
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


}



