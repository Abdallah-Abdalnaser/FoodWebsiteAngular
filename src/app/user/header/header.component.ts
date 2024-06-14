import { Component, DoCheck, SimpleChanges } from '@angular/core';
import { IconDefinition, faCartShopping , faDoorOpen  } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../shaired/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck{
  faCartShopping:IconDefinition = faCartShopping;
  faDoorOpen:IconDefinition = faDoorOpen;
  constructor(private CartService:CartService) {};
  NumberOfYourItem:number= this.CartService.item.length;
  ngDoCheck(): void {
    this.NumberOfYourItem= this.CartService.item.length;
  }
}
