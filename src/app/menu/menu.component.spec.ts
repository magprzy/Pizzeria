import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {OrderListComponent} from '../order-list/order-list.component';
import {Dish} from '../model/dish';
import {OrderComponent} from '../order/order.component';
import {MenuService} from './menu.service';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule,
      ],
      declarations: [MenuComponent, OrderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add dish to cart', () => {
    const order = TestBed.createComponent(OrderComponent).componentInstance;
    const dish: Dish = {id: 1, name: 'pizza', description: 'dobra', type: 'pizza', price: 25, isAvailable: true};
    component.addToCart(dish);
    order.ngOnInit();
    expect(order.dishes.length).toBe(1);
  });

});
