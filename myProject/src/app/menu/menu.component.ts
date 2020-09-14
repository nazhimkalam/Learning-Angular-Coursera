import { DISHES } from './../shared/dishes';
import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})


export class MenuComponent implements OnInit {
  
  dishes:Dish[] = DISHES;
  selectedDish: Dish;

  onSelect(dish: Dish){
    this.selectedDish = dish;
  }

  constructor() {}

 
  ngOnInit(): void {}
}
