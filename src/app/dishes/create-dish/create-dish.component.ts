import { Component, OnInit } from '@angular/core';
import { Dish } from '../../models/dish';

@Component({
  selector: 'create-dish',
  templateUrl: './create-dish.component.html',
  styleUrls: ['./create-dish.component.scss']
})
export class CreateDishComponent implements OnInit {

  newDish: Dish = {
    id: 1,
    name: ''
  };

  constructor() { }

  ngOnInit() {

  }

  onSave() {
    alert(this.newDish.name);
  }

}
