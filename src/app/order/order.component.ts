import {Component, OnInit} from '@angular/core';
import {Dish} from '../model/dish';

import {OrderService} from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  dishes: Dish[];


  constructor(readonly orderService: OrderService) {
  }


  ngOnInit() {
    this.dishes = this.orderService.getOrder();

  }
  removeFromCart(id) {
     this.orderService.removeDish(id);
     this.dishes = this.orderService.getOrder();
  }

}
