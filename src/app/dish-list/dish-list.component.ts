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

  constructor(private readonly menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getAllDishes().subscribe(res => this.dishes = res);
  }

  ngSelect(type) {
    this.menuService.getSelectedDishes(type).subscribe(res => this.dishes = res);
  }

  changeAvailability(dish) {
    const newDish = dish;
    if (dish.isAvailable === true) {
      newDish.isAvailable = false;
    } else {newDish.isAvailable = true; }
    this.menuService.changeAvailability(newDish);
  }
}
