import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Foods } from '../shaired/food.service';
import { Food } from '../food-mine/food.model';
import { ActivatedRoute, Params } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../shaired/cart.service';


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss'
})
export class FoodPageComponent implements OnInit{
  food!:any;
  faHeart:IconDefinition=faHeart;
  constructor(private foodService:Foods,private route:ActivatedRoute ,private CartService:CartService){}
  ngOnInit(): void {
    this.route.params.subscribe(
      (data:Params) => this.food = this.foodService.getfood(+data['id'])
    )
  }
  AddToCart():void {
    let sound:HTMLAudioElement = new Audio;
    sound.src='../../assets/sound/Add.mp3';
    sound.load();
    sound.play();
    this.CartService.AddToCart(this.food);
  }
}
