import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrderService} from '../order/order.service';
import {Order} from '../model/order';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../menu/menu.service';
import {Dish} from '../model/dish';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  order: Order[];
  dish: Dish;
  orderSub: Subscription;

  constructor(private readonly orderService: OrderService, private route: ActivatedRoute, private readonly menuService: MenuService) {
  }

  ngOnInit() {
    this.getOrder();
  }

  ngOnDestroy() {
    this.orderSub.unsubscribe();
  }

  getOrder() {
    const id = this.route.snapshot.paramMap.get('id');
    this.orderSub = this.orderService.getOrderByID(id).subscribe(order => this.order = order);
  }

  changeStatus(order) {
    const newOrder = order;
    if (order.status === 'w realizacji') {
      newOrder.status = 'zrealizowano';
    } else {
      newOrder.status = 'w realizacji';
    }
    this.orderService.changeOrderStatus(newOrder);
  }

}
