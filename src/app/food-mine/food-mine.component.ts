import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Foods } from '../shaired/food.service';
import { Food } from './food.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-food-mine',
  templateUrl: './food-mine.component.html',
  styleUrls: ['./food-mine.component.scss']
})
export class FoodMineComponent implements OnInit , DoCheck{
  food!:Food[];
  s!:Subscription;
  catigores:string[]=["All","FastFood","Pizza","Lunch","SlowFood","Hamburger","Fry","Soup"];

  constructor(private Food:Foods) {}

  ngOnInit(): void {
    this.food = this.Food.getNumberOfCategore('All');
  }

  ngDoCheck(): void {
    this.s = this.Food.yourSearch.subscribe(
      (data:Food[]) => this.food = data
    )
  }

  getNumber(name:string):number {
    return this.Food.getNumberOfCategore(name).length;
  }

  changeCatrds(name:string):void {
    this.food = this.Food.getNumberOfCategore(name);
  }

  ngOnDestroy(): void {
    this.s.unsubscribe();
  }
}
