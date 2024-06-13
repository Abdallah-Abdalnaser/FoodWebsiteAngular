import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { FoodMineComponent } from './food-mine/food-mine.component';
import { CartComponent } from './cart/cart.component';
import { NoItemComponent } from './cart/No-item/no-item-componet';
import { FoodPageComponent } from './food-page/food-page.component';

const routes: Routes = [
  {path:'user' , component:UserComponent , children:[
    {path:'findmine' , component:FoodMineComponent},
    {path:'cart' , component:CartComponent,children:[
      {path:'noitem',component:NoItemComponent}
    ]},
    {path:'Foodpage/:id' , component:FoodPageComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
