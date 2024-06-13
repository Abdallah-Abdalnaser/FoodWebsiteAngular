import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './header/header.component';
import { FoodMineComponent } from './food-mine/food-mine.component';
import { SearchBarComponent } from './food-mine/search-bar/search-bar.component';
import { CategoresComponent } from './food-mine/categores/categores.component';
import { CardsComponent } from './food-mine/cards/cards.component';
import { CartComponent } from './cart/cart.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { TotalComponent } from './cart/total/total.component';
import { ListOfFoodComponent } from './cart/list-of-food/list-of-food.component';
import { NoItemComponent } from './cart/No-item/no-item-componet';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    UserComponent,
    HeaderComponent,
    FoodMineComponent,
    SearchBarComponent,
    CategoresComponent,
    CardsComponent,
    CartComponent,
    FoodPageComponent,
    TotalComponent,
    ListOfFoodComponent,
    NoItemComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule
  ]
})
export class UserModule { }
