import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dish} from '../model/dish';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  constructor(readonly http: HttpClient) {
  }

  getAllDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>('http://localhost:3000/dishes');
  }

  getSelectedDishes(type: string): Observable<Dish[]> {
    return this.http.get<Dish[]>('http://localhost:3000/dishes?}').pipe(
      map(array => {
        return array.filter(x => x.type === type);
      })
    );
  }

  changeAvailability(dish: Dish) {
    this.http.put<Dish[]>('http://localhost:3000/dishes/' + dish.id, dish).subscribe();
  }

  getDishByID(id): Observable<Dish> {
    return this.http.get<Dish>('http://localhost:3000/dishes/' + id);

  }
}
