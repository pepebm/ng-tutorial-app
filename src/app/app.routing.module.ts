import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DishesComponent } from './dishes/dishes.component';
import { CreateDishComponent } from './dishes/create-dish/create-dish.component';
import { EditDishComponent } from './dishes/edit-dish/edit-dish.component';



const routes: Routes = [
    { path: '', component: DishesComponent },
    { path: 'create-dish', component: CreateDishComponent },
    { path: 'edit-dish/:dishId', component: EditDishComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)] ,
    exports: [RouterModule]
})
export class AppRoutingModule {}