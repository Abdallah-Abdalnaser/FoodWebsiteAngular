import { Component , OnInit } from '@angular/core';
import { CartService } from '../shaired/cart.service';
import { Food } from '../food-mine/food.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart!:Food[];

  constructor(private CartService:CartService , private route:Router,private Route:ActivatedRoute) {};
  ngOnInit(): void {
    this.cart = this.CartService.item;
    if (this.cart.length == 0) {
      this.route.navigate(['noitem'],{relativeTo:this.Route})
    }
  }

}
