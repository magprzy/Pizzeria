import {Component, OnInit} from '@angular/core';
import {OrderService} from '../order/order.service';
import {Order} from '../model/order';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  order: Order[];
  constructor(private readonly orderService: OrderService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getOrder();
  }

  getOrder(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderByID(id).subscribe(order => this.order = order);
  }

}
