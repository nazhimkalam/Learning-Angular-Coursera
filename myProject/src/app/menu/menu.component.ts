import { DishService } from './../services/dish.service';
import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  selectedDish: Dish;

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    // This is similar to a useEffect hook in react, the ngOnInit is a type of life cycle method in Angular
    this.dishes = this.dishService.getDishes();
  }
}
