import { Component, OnInit, Input } from '@angular/core';
import {Service} from '../../../Model/service'
import { Templates } from 'src/app/Model/templates.model';

@Component({
  selector: 'template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.scss']
})
export class TemplateCardComponent implements OnInit {

  @Input() template: Templates;
  rating:number;
  imgUrl:string = "../../../../assets/";
  url:string;

  constructor() { }

  ngOnInit(): void {
    //this.imgUrl = this.imgUrl + this.template.providerName + ".jpg";
    this.url = '/template/detail/'+ this.template.templateId; 
  }

  getStars(){
    this.rating = this.template.rating/5*100;
    return this.rating + '%';

  }

  openDetail()  
  {  
    var url = '/template/detail/'+ this.template.templateId; 
     window.open(url);  
  }

}
