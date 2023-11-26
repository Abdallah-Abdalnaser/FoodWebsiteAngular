import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FoodMineComponent } from './food-mine/food-mine.component';
import { SearchBarComponent } from './food-mine/search-bar/search-bar.component';
import { CategoresComponent } from './food-mine/categores/categores.component';
import { CardsComponent } from './food-mine/cards/cards.component';
import { CartComponent } from './cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FoodPageComponent } from './food-page/food-page.component';
import { ListOfFoodComponent } from './cart/list-of-food/list-of-food.component';
import { TotalComponent } from './cart/total/total.component';
import { NoItemComponent } from './cart/No-item/no-item-componet';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodMineComponent,
    SearchBarComponent,
    CategoresComponent,
    CardsComponent,
    CartComponent,
    FoodPageComponent,
    TotalComponent,
    ListOfFoodComponent,
    NoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
