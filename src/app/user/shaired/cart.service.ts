import { Subject } from "rxjs";
import { Food } from "../food-mine/food.model";

export class CartService {
  item:Food[]=[];
  totalPrice!:number;
  total = new Subject<number>();

  AddToCart(foodSelected:Food):void {
    const findIt = this.item.filter((Product:Food ,index)=> {
      return Product.id == foodSelected.id ? this.item[index].numberOfItem++:'';
    })
    if (findIt.length ==0) {
      this.item.push(foodSelected);
    }
  }

  DeleteFromCart(id:number) {
    this.item.splice(id,1);
  }

  TotalPrice():number {
    this.totalPrice = 0;
    for (let index = 0; index < this.item.length; index++) {
      this.totalPrice += (this.item[index].price * this.item[index].numberOfItem);
    }
    return this.totalPrice;
  }

  NumberOfItem():number {
    return this.item.length;
  }
}
