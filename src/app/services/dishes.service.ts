import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Dish } from '../models/dish.model';

@Injectable({ providedIn: 'root' })
export class DishesService {
  private dishes: Dish[] = [];
  private dishesUpdated = new Subject<Dish[]>();

  constructor(private http: HttpClient) {}

  getDishes(){
    this.http.get<{dishes: Dish[]}>('http://localhost:3000/api/dishes')
      .subscribe(res =>{
        this.dishes = res.dishes;
        this.dishesUpdated.next([...this.dishes]);
      })
    ;
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
    this.http.post<{dishes: Dish[]}>('http://localhost:3000/api/dishes', dish)
      .subscribe(res =>{
        this.dishes.push(dish);
        this.dishesUpdated.next([...this.dishes]);
      })
    ;
  }
}
