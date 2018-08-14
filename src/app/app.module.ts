import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,
         MatToolbarModule,
         MatIconModule,
         MatMenuModule,
         MatExpansionModule,
         MatButtonModule, 
         MatSidenavModule,
         MatListModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateDishComponent } from './dishes/create-dish/create-dish.component';
import { ListDishComponent } from './dishes/list-dish/list-dish.component';
import { EditDishComponent } from './dishes/edit-dish/edit-dish.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    CreateDishComponent,
    ListDishComponent,
    NavbarComponent,
    EditDishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatButtonModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
