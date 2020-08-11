import { Component, OnInit,Input } from '@angular/core';
import { Service } from 'src/app/Model/service';

@Component({
  selector: 'app-combinationtemplate',
  templateUrl: './combinationtemplate.component.html',
  styleUrls: ['./combinationtemplate.component.scss']
})
export class CombinationtemplateComponent implements OnInit {

  @Input() ServiceList:Service[]=[];
  @Input() Sample='';
  constructor() { }

  ngOnInit(): void {
  }

}
