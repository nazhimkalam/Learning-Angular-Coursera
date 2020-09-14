import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}

  getDishes(): Dish[] {
    return DISHES;
  }
}

// Decorators is a design pattern that is used to separate modification or decoration of a class without modifying
// the original source code. In AngularJS, decorators are functions that allow a service, directive or filter to be
// modified prior to its usage.
