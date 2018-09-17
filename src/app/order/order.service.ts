import {Injectable} from '@angular/core';
import {Dish} from '../model/dish';
import {Observable} from 'rxjs';

import {Order} from '../model/order';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  dishes: Dish[] = [];
  dishesIDs: number[] = [];
  totalCost: number;

  constructor(readonly http: HttpClient) {
  }


  getOrder(): Dish[] {
    return this.dishes;
  }

  getOrderByID(id): Observable<Order> {
    return this.http.get<Order>('http://localhost:3000/orders/' + id);

  }

  getTotalCost() {
    return this.totalCost;
  }

  addDishToCart(item): void {
    this.dishes.push(item);
    this.calculateOrderCost();
  }

  cleanOrder() {
    this.dishes = [];
  }

  calculateOrderCost() {
    this.totalCost = 0;
    this.dishes.forEach(dish => {
      this.totalCost += +dish.price;
    });
  }

  removeDishFromOrder(id: number) {
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

  changeOrderStatus(order) {

    this.http.put<Order[]>('http://localhost:3000/orders/' + order.id, order).subscribe();
  }

  removeOrder(id) {
    this.http.delete('http://localhost:3000/orders/' + id).subscribe();
  }
}

