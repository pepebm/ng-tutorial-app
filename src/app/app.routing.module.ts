import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DishesComponent } from './dishes/dishes.component';
import { CreateDishComponent } from './dishes/create-dish/create-dish.component';



const routes: Routes = [
    { path: '', component: DishesComponent },
    { path: 'create-dish', component: CreateDishComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)] ,
    exports: [RouterModule]
})
export class AppRoutingModule {}