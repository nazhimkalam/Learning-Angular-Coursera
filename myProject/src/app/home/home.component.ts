import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from './../shared/leader';
import { LeaderService } from './../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dish: Dish;
  dishErrMsg: string;

  promotion: Promotion;
  promotionErrMsg: string;

  leader: Leader;
  leaderErrMsg: string;

  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') private baseURL
  ) {}

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(
      (result) => (this.dish = result),
      (errMsg) => (this.dishErrMsg = <any>errMsg)
    );
    this.promotionservice.getFeaturedPromotion().subscribe(
      (result) => (this.promotion = result),
      (errMsg) => (this.promotionErrMsg = <any>errMsg)
    );
    this.leaderService.getFeaturedLeader().subscribe(
      (result) => (this.leader = result),
      (errMsg) => (this.leaderErrMsg = <any>errMsg)
    );
  }
}
