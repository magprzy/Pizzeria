import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { OrderListComponent } from './order-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {OrderService} from '../order/order.service';
import {of} from 'rxjs';

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule,
      ],
      declarations: [ OrderListComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    spyOn(TestBed.get(OrderService), 'getAllOrders').and.returnValue(of([]));
    component.ngOnInit();
    expect(component).toBeTruthy();
    tick();
    expect(component.orders).toEqual([]);
  }));
});
