import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodMineComponent } from './food-mine/food-mine.component';
import { CartComponent } from './cart/cart.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { NoItemComponent } from './cart/No-item/no-item-componet';

const routes: Routes = [
  {path:'' ,redirectTo:'/findmine',pathMatch:'full'},
  {path:'findmine' , component:FoodMineComponent},
  {path:'cart' , component:CartComponent,children:[
    {path:'noitem',component:NoItemComponent}
  ]},
  {path:'Foodpage/:id' , component:FoodPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
