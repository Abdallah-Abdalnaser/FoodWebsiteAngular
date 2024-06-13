import { Component, DoCheck } from '@angular/core';
import { CartService } from '../../shaired/cart.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrl: './total.component.scss'
})
export class TotalComponent implements DoCheck{
  itemNumber!:number;
  totalPrice:number = 0;
  constructor(private CartService:CartService){};

  ngDoCheck(): void {
    this.itemNumber = this.CartService.NumberOfItem();
    this.CartService.total.subscribe(
      (price:number) => this.totalPrice +=price
    )
    this.totalPrice = this.CartService.TotalPrice();
  }
}
