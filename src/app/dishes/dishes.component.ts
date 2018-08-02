import { Component } from '@angular/core';

import { Dish } from '../models/dish.model';

@Component({
  selector: 'dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent {

  dishes: Dish[] = [];

  onDishAdded(dish){
    const lastIndex = this.dishes.length;
    dish.id = lastIndex;
    this.dishes.push(dish);
  }
}
