import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss']
})
export class RatingStarComponent implements OnInit {

  @Input('TotalStar') total_star: number = 5;
  @Input('size') size: string = '';
  @Input('value') value: number = 5;
  @Input('color') color: string = 'gold'

  rating = new Array(this.total_star * 2);
  numbers = [];
  half:boolean = false;

  constructor() {
  }

  ngOnInit(): void {

    let deci = Math.floor(this.value);
    let frac = this.value - deci;

    if(deci == 0 && frac!=0){
      this.half = true;
      this.fillArray(this.total_star)
    }
    else if(frac != 0){
      this.fillArray(this.total_star-1)
    }
    else{
      this.fillArray(this.total_star)
    }

    for (let i = 0; i < this.total_star * 2; i = i + 2) {
      if (i < 2 * deci) {
        this.rating[i] = 1;
        this.rating[i + 1] = 0;
      }
      else if ((i == deci*2) && frac != 0) {
        this.rating[i-1] = 1;
        this.rating[i] = 0;
        this.rating[i+1] = 0;
      }
      else{
        this.rating[i] = 0;
        this.rating[i+1] = 0;
      }
    }

  }

  fillArray(total){
    for(let i=0 ;i<total;i++){
      this.numbers.push(i)
    }
  }

}
