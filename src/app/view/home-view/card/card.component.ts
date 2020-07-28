import { Component, OnInit, Input } from '@angular/core';
import {Service} from '../../../Model/service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() service: Service;
  rating:number;
  imgUrl:string = "../../../../assets/";

  constructor() { }

  ngOnInit(): void {
    this.imgUrl = this.imgUrl + this.service.providerName + ".jpg";
  }

  getStars(){
    this.rating = this.service.rating/5*100;
    return this.rating + '%';

  }

  openDetail()  
  {  
    var url = '/detail/'+ this.service.id; 
     window.open(url);  
  }

}
