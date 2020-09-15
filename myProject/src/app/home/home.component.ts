import { Component, OnInit } from '@angular/core';
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
  promotion: Promotion;
  leader: Leader;

  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderService: LeaderService
  ) {}

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe((result) => (this.dish = result));
    this.promotionservice
      .getFeaturedPromotion()
      .subscribe((result) => (this.promotion = result));
    this.leaderService.getFeaturedLeader().subscribe(result => (this.leader = result));
  }
}
