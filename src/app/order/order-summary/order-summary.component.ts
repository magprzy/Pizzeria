import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {OrderSummaryService} from './order-summary.service';
import {Order} from '../../model/order';
import {OrderService} from '../order.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  orderSummary: Order = <Order>{};

  angularForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    street: new FormControl(),
    city: new FormControl(),
    houseNumber: new FormControl(),
    floor: new FormControl(),

  });

  constructor(readonly orderSummaryService: OrderSummaryService, readonly orderService: OrderService, private router: Router) {

  }

  ngOnInit() {
  }

  createOrder() {
    this.orderSummary.addressData = this.angularForm.value;
    this.orderSummary.dishesIDs = this.orderService.getDishesIds();
    this.orderSummary.status = 'w realizacji';
  }

  onSubmit() {
    this.createOrder();
    this.orderSummaryService.saveOrder(this.orderSummary).subscribe();

  }

  openConfirmation() {
    this.router.navigate([{outlets: {popup: ['notification']}}]);

  }}

