import { AfterViewInit, Component , DoCheck, ElementRef, Input, ViewChild} from '@angular/core';
import { Food } from 'src/app/food-mine/food.model';
import { CartService } from 'src/app/shaired/cart.service';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-list-of-food',
  templateUrl: './list-of-food.component.html',
  styleUrl: './list-of-food.component.scss'
})
export class ListOfFoodComponent implements AfterViewInit {
  @Input() item!:Food;
  @Input() id!:number;
  @ViewChild("itemNumber") inputNumber!:ElementRef;
  total!:number;

  constructor(private CartService:CartService , private router:Router , private route:ActivatedRoute) {};

  ngAfterViewInit(): void {
    if ( this.inputNumber != undefined) {
      this.total = this.item.price * +this.inputNumber.nativeElement.value;
      this.CartService.total.next(this.total);
    }

  }

  Remove():void {
    let sound:HTMLAudioElement = new Audio;
    sound.src='../../../assets/sound/delete.mp3';
    sound.load();
    sound.play();
    this.CartService.DeleteFromCart(this.id);
    if (this.CartService.item.length === 0) {
      this.router.navigate(['noitem'],{relativeTo:this.route});
    }
  };

  increasePrice(itemNumber: String):void {
    if (itemNumber === "0"){
      this.Remove();
    }else {
      this.item.numberOfItem = +itemNumber;
      this.total= this.item.price * +this.inputNumber.nativeElement.value;
    }
  }

}
