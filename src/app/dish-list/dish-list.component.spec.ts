import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DishListComponent} from './dish-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {Dish} from '../model/dish';

describe('DishListComponent', () => {
  let component: DishListComponent;
  let fixture: ComponentFixture<DishListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule,
      ],
      declarations: [DishListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change dish availability', function () {
    const dish = <Dish>{isAvailable: true};
    component.dishes = [dish];
    component.changeAvailability(dish);
    expect(component.dishes).toEqual([<Dish>{isAvailable: false}]);
  });
  
});
