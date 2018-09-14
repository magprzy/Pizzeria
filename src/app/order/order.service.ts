import {Injectable} from '@angular/core';
import {Dish} from '../model/dish';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Order} from '../model/order';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  dishes: Dish[] = [];
  dishesIDs: number[] = [];

  constructor(readonly http: HttpClient) {
  }


  getOrder(): Dish[] {
    return this.dishes;
  }

  addDishToCart(item: Dish): void {
    this.dishes.push(item);
  }

  cleanOrder() {
    this.dishes = [];
  }

  removeDish(id: number) {
    this.dishes.splice(this.dishes.indexOf(this.dishes.find((dish => dish.id === id))), 1);
  }

  getDishesIds() {
    this.dishesIDs = [];
    this.dishes.forEach(dish => this.dishesIDs.push(dish.id));
    return this.dishesIDs;
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:3000/orders');
  }

}

