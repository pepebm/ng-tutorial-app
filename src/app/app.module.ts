import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,
         MatToolbarModule,
         MatIconModule,
         MatMenuModule,
         MatExpansionModule,
         MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateDishComponent } from './dishes/create-dish/create-dish.component';
import { ListDishComponent } from './dishes/list-dish/list-dish.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    CreateDishComponent,
    ListDishComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
