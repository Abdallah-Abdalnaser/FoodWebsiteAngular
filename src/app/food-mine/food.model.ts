export class Food {
  id:number;
  image:string;
  name:string;
  favorite:string;
  rate:number;
  country:string[];
  time:string;
  price:number;
  type:string;
  numberOfItem:number
  constructor(public i:number,public img:string,public n:string,public fav:string,public R:number,public coun:string[],public t:string,public p:number,public ty:string,public NOI:number) {
    this.id =i;
    this.image = img;
    this.name = n;
    this.favorite=fav;
    this.rate = R;
    this.country = coun;
    this.time = t;
    this.price = p;
    this.type = ty;
    this.numberOfItem = NOI
  }
}
