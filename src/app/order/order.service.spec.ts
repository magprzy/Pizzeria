import {TestBed, inject} from '@angular/core/testing';

import {OrderService} from './order.service';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {Dish} from '../model/dish';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';

describe('OrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule,
      ],
      providers: [OrderService]
    });
  });

  it('should be created', inject([OrderService], (service: OrderService) => {
    expect(service).toBeTruthy();
  }));

  it('should remove dish from order', inject([OrderService], (service: OrderService) => {
    service.dishes = [<Dish>{id: 1}, <Dish>{id: 2}];
    service.removeDishFromOrder(1);
    expect(service.dishes.length).toBe(1);
  }));


  it('should return id dishes in cart ', inject([OrderService], (service: OrderService) => {
    service.dishes = [<Dish>{id: 4}, <Dish>{id: 2}, <Dish>{id: 3}];
    expect(service.getDishesIds()).toEqual([4, 2, 3]);

  }));

  it('should calculate order cost', inject([OrderService], (service: OrderService) => {
    service.dishes = [<Dish>{price: 14}, <Dish>{price: 12}, <Dish>{price: 13}];
    service.calculateOrderCost();
    expect(service.totalCost).toBe(39);
  }));

});
