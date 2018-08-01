import { Component, OnInit } from '@angular/core';
import { Dish } from '../../models/dish';

@Component({
  selector: 'list-dish',
  templateUrl: './list-dish.component.html',
  styleUrls: ['./list-dish.component.scss']
})
export class ListDishComponent implements OnInit {

  dishes = [
    {
      id: 1,
      name: 'Tacos',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt uea',
    },
    {
      id: 2,
      name: 'Sushi',
      desc: 'Lorem ipsum dolor',
    },
    {
      id: 3,
      name: 'Hot Dog',
      desc: 'Pan y salchcicha para el pueblo'
    }
  ];

  constructor() { }

  ngOnInit() {

  }

}
