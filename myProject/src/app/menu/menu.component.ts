import { DishService } from './../services/dish.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  errMess: string;

  constructor(
    private dishService: DishService,
    @Inject('BaseURL') private baseURL
  ) {}

  ngOnInit(): void {
    // This is similar to a useEffect hook in react, the ngOnInit is a type of life cycle method in Angular
    this.dishService.getDishes().subscribe(
      (result) => (this.dishes = result),
      (errMsg) => (this.errMess = <any>errMsg)  // if an error is returned we handle it like this
    );
  }
}
