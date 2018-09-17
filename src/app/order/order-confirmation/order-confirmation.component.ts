import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
  }

  closePopup() {
    this.router.navigate([{outlets: {popup: null}}]);
    this.orderService.cleanOrder();
    this.router.navigate(['/']);
  }


}
