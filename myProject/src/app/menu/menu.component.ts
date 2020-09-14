import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

const DISHES: Dish[] = [
  {
    id: '0',
    name: 'Pizza',
    image: '/assets/images/pizza.jpg',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '4.99',
    description:
      'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
  },
  {
    id: '1',
    name: 'cake',
    image: '/assets/images/cake.jpg',
    category: 'appetizer',
    featured: false,
    label: 'Sweet',
    price: '1.99',
    description:
      'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
  },
  {
    id: '2',
    name: 'chocolate',
    image: '/assets/images/chocolate.jpg',
    category: 'appetizer',
    featured: false,
    label: 'New',
    price: '1.99',
    description:
      'A quintessential ConFusion experience, is it a vada or is it a donut?',
  },
  {
    id: '3',
    name: 'cheesecake',
    image: '/assets/images/cheesecake.jpeg',
    category: 'dessert',
    featured: false,
    label: 'Smooth',
    price: '2.99',
    description:
      'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
  },
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})


export class MenuComponent implements OnInit {
  
  dishes:Dish[] = DISHES;
  selectedDish = DISHES[0];


  constructor() {}

  ngOnInit(): void {}
}
