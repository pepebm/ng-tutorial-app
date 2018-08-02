import { Component, OnInit } from '@angular/core';

import { Dish } from '../../models/dish.model';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'list-dish',
  templateUrl: './list-dish.component.html',
  styleUrls: ['./list-dish.component.scss']
})
export class ListDishComponent implements OnInit {

  dishes: Dish[] = [];

  constructor(public dishesService: DishesService) {}

  ngOnInit() {
    this.dishes = this.dishesService.getDishes();
    this.dishesService.getDishesUpdateListener
      .subscribe();
  }

}
