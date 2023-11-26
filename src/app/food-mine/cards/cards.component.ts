import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition, faClock ,faHeart} from '@fortawesome/free-solid-svg-icons';
import { Foods } from 'src/app/shaired/food.service';
import { Food } from '../food.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent{
  @Input() food!:Food;
  // @Input() id!:number;
  constructor(private Food:Foods) {}
  faClock:IconDefinition =faClock;
  faHeart:IconDefinition =faHeart;
  ratingChanged(e:any) {
    // console.log(e.detail);
  }
}
