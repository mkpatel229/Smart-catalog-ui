import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {Service} from '../../Model/service'
import {CloudService} from '../../service/cloud.service'
import { Router } from '@angular/router';
import { Templates } from 'src/app/Model/templates.model';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  errorMessage:string;
  serviceList: Service[];
  templateList: Templates[];
  ApprovedTemplateList: Templates[];
  RecoTemplateList: Templates[];

  constructor(private cloudService:CloudService, private router:Router) { 
      this.router.events.subscribe((path) => {
        window.scrollTo(0, 0);
    });
    
   }

  ngOnInit(): void { 

    this.cloudService.getServices().subscribe(service => {
      this.cloudService.service = service;
      this.serviceList=this.cloudService.service;
    } ,error => this.errorMessage = <any>error);

    this.cloudService.getTemplates().subscribe(template => {
      this.templateList = template;
      this.ApprovedTemplateList = template.filter(s => s.isApproved==true);
      this.RecoTemplateList = template.sort((s1,s2) => {return s1.rating>s2.rating?-1:1});
    },error => this.errorMessage = <any>error);

   }

}
