import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrderService} from '../order/order.service';
import {Order} from 'src/app/model/order';
import {takeUntil} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, OnDestroy {

  orders: Order[];
  orderSub: Subscription;

  constructor(readonly orderService: OrderService) {
  }

  ngOnInit() {
    this.orderSub = this.orderService.getAllOrders().subscribe(res => this.orders = res);
  }

  ngOnDestroy() {
    this.orderSub.unsubscribe();
  }

  changeStatus(order) {
    const newOrder = order;
    if (order.status === 'w realizacji') {
      newOrder.status = 'zrealizowano';
    } else  {
      newOrder.status = 'w realizacji';
    }
    this.orderService.changeOrderStatus(newOrder);
  }
}
