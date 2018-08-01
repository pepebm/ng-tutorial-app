import { Component, OnInit } from '@angular/core';

import { Dish } from '../models/dish';

@Component({
  selector: 'dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {

  dish: Dish = {
    id: 1,
    name: 'French fries'
  };

  constructor() { }

  ngOnInit() {

  }

}
