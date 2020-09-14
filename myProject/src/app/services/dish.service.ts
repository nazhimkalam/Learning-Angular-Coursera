import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}

  getDishes():Dish[]{
    return DISHES
  }

  getDish(id: string): Dish {
    return DISHES.filter((dish) => dish.id === id)[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }
}

// Decorators is a design pattern that is used to separate modification or decoration of a class without modifying
// the original source code. In AngularJS, decorators are functions that allow a service, directive or filter to be
// modified prior to its usage.
