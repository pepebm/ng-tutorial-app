import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Dish } from '../models/dish.model';

@Injectable({ providedIn: 'root' })
export class DishesService {
  private dishes: Dish[] = [];
  private dishesUpdated = new Subject<Dish[]>();

  constructor(private http: HttpClient) {}

  getDishes(){
    this.http.get<{dishes: any}>('http://localhost:3000/api/dishes')
      .pipe(map((dishData) => {
        return dishData.dishes.map(dish => {
          return {
            id: dish._id,
            name: dish.name,
            desc: dish.desc
          };
        });
      }))
      .subscribe(res => {
        this.dishes = res;
        this.dishesUpdated.next([...this.dishes]);
      })
    ;
  }

  getDishesUpdateListener(){
    return this.dishesUpdated.asObservable();
  }

  findDish(id: string){
    return {...this.dishes.find(d => d.id === id)};
  }

  addDish(name: string, desc: string){
    const dish: Dish = {
      id: null,
      name: name,
      desc: desc
    };
    this.http.post<{ dishId: string }>('http://localhost:3000/api/dishes', dish)
      .subscribe(res =>{
        dish.id = res.dishId;
        this.dishes.push(dish);
        this.dishesUpdated.next([...this.dishes]);
      })
    ;
  }

  deleteDish(id: string){
    this.http.delete('http://localhost:3000/api/dishes/' + id)
      .subscribe(() => {
        const newDishes = this.dishes.filter(dish => dish.id !== id);
        this.dishesUpdated.next([...newDishes]);
      })
    ;
  }
}
