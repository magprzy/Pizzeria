import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrderService} from '../../order/order.service';
import {Order} from '../../model/order';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from '../../menu/menu.service';
import {Dish} from '../../model/dish';
import {Subscription} from 'rxjs';
import {OrderListComponent} from '../order-list.component';
import {tick} from '@angular/core/testing';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  order: Order;
  dish: Dish;
  orderSub: Subscription;

  constructor(private readonly orderService: OrderService,
              private route: ActivatedRoute, private readonly menuService: MenuService, private router: Router) {
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

    if (order.status === 'w realizacji') {
      this.order.status = 'zrealizowano';
    } else {
      this.order.status = 'w realizacji';
    }
    this.orderService.changeOrderStatus(this.order);
  }

  removeOrder(id) {
    this.orderService.removeOrder(id);
    this.router.navigate(['/order-list']);
  }

}
