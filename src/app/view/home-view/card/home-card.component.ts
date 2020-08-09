import { Component, OnInit, Input } from '@angular/core';
import {Service} from '../../../Model/service'
import { Templates } from '../../../Model/templates.model';

@Component({
  selector: 'Home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {

  @Input('service') service: Service;
  @Input('template') template: Templates;
  rating:number;
  imgUrl:string = "../../../../assets/";

  constructor() { }

  ngOnInit(): void {
    this.imgUrl = this.imgUrl + this.service?.providerName + ".jpg";
  }

  openDetail()  
  {  
    var url = '/service/detail/'+ this.service.id; 
     window.open(url);  
  }

}
