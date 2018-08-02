import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'create-dish',
  templateUrl: './create-dish.component.html',
  styleUrls: ['./create-dish.component.scss']
})
export class CreateDishComponent {
  
  constructor(public dishesService: DishesService) { }

  onAddDish(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.dishesService.addDish(form.value.name, form.value.desc);
    form.reset();
  }

}
