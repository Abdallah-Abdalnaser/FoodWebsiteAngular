import { Subject } from "rxjs";
import { Food } from "../food-mine/food.model";

export class CartService {
  item:Food[]=[];
  totalPrice!:number;
  total = new Subject<number>();

  AddToCart(foodSelected:Food):void {
    if (this.item.length > 0) {
      for (let index = 0; index <= this.item.length; index++) {
        if (this.item[index].name === foodSelected.name) {
          this.item[index].numberOfItem ++;
          break;
        } else if(index === this.item.length-1){
          this.item.push(foodSelected);
        }
      }
    } else {
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
