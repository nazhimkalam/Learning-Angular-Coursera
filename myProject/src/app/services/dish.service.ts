import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}

  getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }

  getDish(id: string): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => dish.id === id)[0]);
  }

  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }
}

//  The Promise object represents the eventual completion (or failure) of an asynchronous operation and its
//  resulting value.

// Decorators is a design pattern that is used to separate modification or decoration of a class without modifying
// the original source code. In AngularJS, decorators are functions that allow a service, directive or filter to be
// modified prior to its usage.
