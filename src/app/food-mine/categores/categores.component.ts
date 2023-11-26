import { Component, Input } from '@angular/core';
import { Foods } from 'src/app/shaired/food.service';

@Component({
  selector: 'app-categores',
  templateUrl: './categores.component.html',
  styleUrls: ['./categores.component.scss']
})
export class CategoresComponent {
  constructor(private Foods:Foods){}
  @Input() CatigoriName!:string;
  @Input() NumbeOfcards!:number;
}
