import { Component, OnInit } from '@angular/core';
import {Dish} from '../model/dish';
import {MenuService} from '../menu/menu.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {
  dishes: Dish[];
  constructor(private readonly dishService: MenuService) { }

  ngOnInit() {
    this.dishService.getAllDishes().subscribe(res => this.dishes = res);
  }

  ngSelect(type) {
    this.dishService.getSelectedDishes(type).subscribe(res => this.dishes = res);
  }

  changeAvailability(dish) {
    this.dishService.changeAvailability(dish);
  }
}
