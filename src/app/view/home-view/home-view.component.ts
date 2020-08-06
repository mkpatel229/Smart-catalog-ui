import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {Service} from '../../Model/service'
import {CloudService} from '../../service/cloud.service'

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  searchText:string = ""


  constructor(private cloudService:CloudService) {  }

  ngOnInit(): void {  }

  search(text){

    // this.NoResult = false;
    // const regex = new RegExp(text,'i');

    // if(text.length != 0){
    //     this.serviceListCopy = this.serviceList.filter(p => p.tags.some(t => {
    //       if(regex.test(t) && p.isApproved) return true;
    //     }));
    //     if(this.serviceListCopy.length == 0)
    //       this.NoResult = true;
    //       this.errorMessage = 'No result found for "' + this.searchText + '"';
    // }

    // else
    //   this.serviceListCopy = this.serviceList;

  }

}
