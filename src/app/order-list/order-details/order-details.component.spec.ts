import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { OrderDetailsComponent } from './order-details.component';
import {Order} from '../../model/order';
import {of} from 'rxjs';
import {OrderService} from '../../order/order.service';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';


describe('OrderDetailsComponent', () => {
  let component: OrderDetailsComponent;
  let fixture: ComponentFixture<OrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule,
      ],
      declarations: [ OrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should change order status', () => {
    spyOn(TestBed.get(OrderService), 'changeOrderStatus');
    let order = <Order>{status: "w realizacji"};
    component.order = order;
    component.changeStatus(order);
    expect(order).toEqual(<Order>{status: "zrealizowano"});
  });
});
