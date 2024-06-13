import { Component , OnInit } from '@angular/core';
import { CartService } from '../shaired/cart.service';
import { Food } from '../food-mine/food.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../serves/alert.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart!:Food[];
  show!:boolean;

  constructor(private CartService:CartService , private route:Router,private Route:ActivatedRoute , private AlertService:AlertService) {};
  ngOnInit(): void {
    this.AlertService.show.subscribe(
      (data)=> {
        this.show = data;
      }
    )
    this.cart = this.CartService.item;
    if (this.cart.length == 0) {
      this.route.navigate(['noitem'],{relativeTo:this.Route})
    }
  }

}
