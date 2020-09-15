import { DishService } from './../services/dish.service';
import { Dish } from './../shared/dish';
import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {
  //  @Input() property is writable while an @Output() property is observable.

  // an @Input() allows data to be input into the child component from the parent component.
  // Use the @Output() decorator in the child component or directive to allow data to flow from
  // the child out to the parent.

  // An @Output() property should normally be initialized to an Angular EventEmitter with values
  // flowing out of the component as events.

  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;

  constructor(
    private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.dishservice
      .getDishIds()
      .subscribe((dishIds) => (this.dishIds = dishIds));
    console.log(this.dishIds); // returns an array of the dish ids ["0", "1", "2", "3"]

    this.route.params
      .pipe(
        switchMap((params: Params) => this.dishservice.getDish(params['id']))
      )
      .subscribe((dish) => {
        this.dish = dish;
        console.log(this.dish); // gives the data if the updated dish selected when ever the route changes
        this.setPrevNext(dish.id);
      });
    
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[
      (this.dishIds.length + index - 1) % this.dishIds.length
    ];
    this.next = this.dishIds[
      (this.dishIds.length + index + 1) % this.dishIds.length
    ];
  }

  goBack(): void {
    this.location.back();
  }
}
