import { Subject } from "rxjs";
import { Food } from "../food-mine/food.model";

export class Foods {
  yourSearch = new Subject<Food[]>()

  foodArray:Food[] = [
    new Food(1,"../../../assets/img/food1.jpg","Pizza Pepperon!","true",2,["italy"],"10-12",20,"Pizza",1),
    new Food(3,"../../../assets/img/food3.png","Hamburger","false",3,["germany"],"25-40",60,"Hamburger",1),
    new Food(4,"../../../assets/img/food4.jpg","Fried potatoes","true",4,["belgium","france"],"5-10",52,"FastFood",1),
    new Food(5,"../../../assets/img/food5.webp","Chicken Soup","false",1,["india","asia"],"50-60",49,"Soup",1),
    new Food(6,"../../../assets/img/food2.jpg","Meatball","true",5,["persia","middle east","china"],"20-30",150,"Lunch",1),
  ]

  getNumberOfCategore(CategoreName:string):Food[] {
    if (CategoreName === "All") {
      return this.foodArray;
    } else {
      const selectedFood = this.foodArray.filter((e)=>{
        return e.type === CategoreName;
      })
      return selectedFood;
    }
  }

  getAll() {
    return this.foodArray.slice();
  }

  getfood(id:number) {
    const food = this.foodArray.find(
      (food:Food) => food.id === id
    )
    return food;
  }

  searchByName(name:string):Food[] {
    if (name !== '') {
      const value:Food[] = this.foodArray.filter((ele)=>{
        return ele.name.toLowerCase().startsWith(name.toLocaleLowerCase());
      });
      return value;
    }else {
      return []
    }
  }
}
