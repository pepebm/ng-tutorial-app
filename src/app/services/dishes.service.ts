import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Dish } from '../models/dish.model';

@Injectable({providedIn: 'root'})
export class DishesService {
  private dishes: Dish[] = [];
  private dishesUpdated = new Subject<Dish[]>();

  getDishes(){
    return [...this.dishes];
  }

  getDishesUpdateListener(){
    return this.dishesUpdated.asObservable();
  }

  addDish(name: string, desc: string){
    const dish: Dish = {
      id: this.dishes.length,
      name: name,
      desc: desc
    };
    this.dishes.push(dish);
    this.dishesUpdated.next([...this.dishes]);
  }
}
