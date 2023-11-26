import { Component } from '@angular/core';
import { Foods } from 'src/app/shaired/food.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  constructor(private Foods:Foods){}
  search2(name:string){
    this.Foods.yourSearch.next(this.Foods.searchByName(name));
    console.log(this.Foods.searchByName(name));
  }
}
