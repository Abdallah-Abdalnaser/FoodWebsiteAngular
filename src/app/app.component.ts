import { Component } from '@angular/core';
import { Foods } from './user/shaired/food.service';
import { CartService } from './user/shaired/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[Foods,CartService]
})
export class AppComponent {
  title = '5-Food-Website-Angular';
}
