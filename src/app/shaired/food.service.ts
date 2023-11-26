import { Subject } from "rxjs";
import { Food } from "../food-mine/food.model";

export class Foods {
  yourSearch = new Subject<Food[]>()

  foodArray:Food[] = [
    new Food(1,"https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg","Pizza Pepperon!","true",2,["italy"],"10-12",20,"Pizza",1),
    new Food(2,"https://www.simplyrecipes.com/thmb/kO2yxG-lT4gNjwLAREAbrspEsgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__11__italian-meatballs-horiz-c-1800-e83b24e913364fd6b867805335961d65.jpg","Meatball","true",5,["persia","middle east","china"],"20-30",150,"Lunch",1),
    new Food(3,"https://insanelygoodrecipes.com/wp-content/uploads/2020/10/Hamburger-with-Sesame-Seeds-Cheese-and-Veggies.png","Hamburger","false",3,["germany"],"25-40",60,"Hamburger",1),
    new Food(4,"https://www.vittoriagiachi.com/wp-content/uploads/2021/08/1200x800-2.jpg","Fried potatoes","true",4,["belgium","france"],"5-10",52,"FastFood",1),
    new Food(5,"https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/10/Chicken-Soup-main-2.jpg","Chicken Soup","false",1,["india","asia"],"50-60",49,"Soup",1)
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
    const value:Food[] = this.foodArray.filter((ele)=>{
      return ele.name.startsWith(name);
    });
    return value;
  }
}
