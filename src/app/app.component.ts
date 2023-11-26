import { Component } from '@angular/core';
import { Foods } from './shaired/food.service';
import { CartService } from './shaired/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[Foods,CartService]
})
export class AppComponent {
  title = '5-Food-Website-Angular';
}
