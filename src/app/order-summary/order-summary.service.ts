import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dish} from '../model/dish';
import {Order} from '../model/order';


@Injectable({
  providedIn: 'root'
})
export class OrderSummaryService {

  constructor(private http: HttpClient) {
  }


  saveOrder(order: Order): Observable<Order> {

    return this.http.post<Order>('http://localhost:3000/orders', order);
  }

}
