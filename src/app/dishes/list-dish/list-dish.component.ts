import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Dish } from '../../models/dish.model';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'list-dish',
  templateUrl: './list-dish.component.html',
  styleUrls: ['./list-dish.component.scss']
})
export class ListDishComponent implements OnInit, OnDestroy {

  dishes: Dish[] = [];
  private dishesSubscription: Subscription;

  constructor(public dishesService: DishesService) {}

  ngOnInit() {
    let subscription = this.dishesService.getDishesUpdateListener();
    this.dishesService.getDishes();
    this.dishesSubscription = subscription
      .subscribe((dishes: Dish[]) => this.dishes = dishes);
  }

  ngOnDestroy() {
    this.dishesSubscription.unsubscribe();
  }

}
