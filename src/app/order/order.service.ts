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

  cleanOrder(item: Dish){
    this.dishes = [];
  }

  removeDish(id: number) {
    this.dishes = this.dishes.filter((dish => dish.id !== id));
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

