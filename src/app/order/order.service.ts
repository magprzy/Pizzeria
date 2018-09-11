import {Injectable} from '@angular/core';
import {Dish} from '../model/dish';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  dishes: Dish[] = [];
  dishesIDs: number[] = [];

  constructor() {
  }


  getOrder(): Dish[] {
    return this.dishes;
  }

  addDishToCart(item: Dish): void {
    this.dishes.push(item);
  }

  removeDish(id: number) {
    this.dishes = this.dishes.filter((dish => dish.id !== id));
  }

  getDishesIds() {
    this.dishesIDs = [];
    this.dishes.forEach(dish => this.dishesIDs.push(dish.id) );
    return this.dishesIDs;
  }
}

