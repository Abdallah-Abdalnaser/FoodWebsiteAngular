import { Component } from '@angular/core';
import { Foods } from '../../shaired/food.service';
import { Food } from '../food.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  Search:Food[]=[]
  constructor(private Foods:Foods){}
  search2(name:string){
    this.Search = this.Foods.searchByName(name)
    console.log(this.Search);

    // this.Foods.yourSearch.next(this.Foods.searchByName(name));
    // console.log(this.Foods.searchByName(name));
  }
}
