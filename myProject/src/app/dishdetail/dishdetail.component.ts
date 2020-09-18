import { Comment } from './../shared/comment';
import { DishService } from './../services/dish.service';
import { Dish } from './../shared/dish';
import { Component, OnInit, Input,Inject, ViewChild } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  @ViewChild('fform') feedbackFormDirective;
  commentForm: FormGroup;
  comment: Comment;

  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;

  formErrors = {
    author: '',
    comment: '',
  };

  validationMessages = {
    author: {
      required: 'Name is required.',
      minlength: 'Name must be at least 2 characters long.',
      maxlength: 'Name cannot be more than 25 characters long.',
    },
    comment: {
      required: 'Comment is required.',
    },
  };

  constructor(
    private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private baseURL
  ) {
    this.createForm();
  }

  createForm() {
    this.commentForm = this.fb.group({
      author: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      comment: ['', [Validators.required]],
      date: new Date(), // we will use the pipe when displaying the content
      rating: 5,
    });

    this.commentForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) {
      return;
    }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';

        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          console.log(messages);   // error messages displayed

          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';

            }
          }
        }
      }
    }
  }
  onSubmit() {
    this.comment = this.commentForm.value;
    console.log(this.comment);
    this.dish.comments.push(this.commentForm.value)
    console.log(this.dish.comments)
    this.commentForm.reset({
      author: '',
      comment: '',
      date: '',
      rating: 5,
    });
    this.feedbackFormDirective.resetForm();
  }

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

  formatLabel(value: number) {
    // this is for the rating bar
    console.log(value);
    this.commentForm;
    return value;
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
