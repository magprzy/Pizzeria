import {Component, OnInit} from '@angular/core';
import {OrderService} from '../order/order.service';
import {Order} from 'src/app/model/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: Order[];

  constructor(readonly orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(res => this.orders = res);

  }

}
