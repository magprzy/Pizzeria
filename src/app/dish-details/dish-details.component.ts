import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Dish} from '../model/dish';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../menu/menu.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit, OnDestroy {
  dish: Dish;
  orderSub: Subscription;
  constructor( private route: ActivatedRoute, private readonly menuService: MenuService) { }

  ngOnInit() {
    this.getOrder();
  }

  ngOnDestroy() {
    this.orderSub.unsubscribe();
  }

  getOrder() {
    const id = this.route.snapshot.paramMap.get('id');
    this.orderSub = this.menuService.getDishByID(id).subscribe(dish => this.dish = dish);
  }

}
