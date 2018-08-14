import { Dish } from './../../models/dish.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DishesService } from '../../services/dishes.service';
import { ActivatedRoute, ParamMap } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.scss']
})
export class EditDishComponent implements OnInit {
  private dishId: string;
  private dish: Dish;

  constructor(public dishesService: DishesService, private route: ActivatedRoute) { }

  onAddDish(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.dishesService.addDish(form.value.name, form.value.desc);
    form.reset();
  }

  ngOnInit(){
    this.route.paramMap.subscribe(((params: ParamMap)=> {
      if(params.get('dishId')) {
        this.dishId = params.get('dishId');
        this.dish = this.dishesService.findDish(this.dishId);
      }
    })); 
  }

}
