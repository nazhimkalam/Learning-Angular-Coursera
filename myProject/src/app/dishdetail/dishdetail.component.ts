import { DishService } from './../services/dish.service';
import { Dish } from './../shared/dish';
import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
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

  constructor(
    private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit():void {
    const id:string = ''+this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
  }

  goBack(): void {
    this.location.back();
  }
}
