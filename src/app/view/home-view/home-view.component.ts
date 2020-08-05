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

  asc:boolean = false;
  errorMessage:string;
  searchText:string = ""
  NoResult = false;
  keyword = 'name';

  data = [
     {
       id: 1,
       name: 'Usa'
     },
     {
       id: 2,
       name: 'England'
     }
  ];

  dropdownListProvider = [];
  selectedItemsProvider = [];
  dropdownListCategory = [];
  selectedItemsCategory = [];
  dropdownSettings:IDropdownSettings;

  serviceList: any = [];
  serviceListCopy: Service[];
  serviceFilterProvider: Service[];
  serviceFilterCategory: Service[];

  constructor(private cloudService:CloudService) { 
    this.cloudService.getServices().subscribe(service => {
      this.cloudService.service = service;
      this.serviceList=this.cloudService.service;
      this.serviceListCopy = this.serviceList
      this.serviceFilterProvider = this.serviceList
      this.serviceFilterCategory = this.serviceList
    } ,error => this.errorMessage = <any>error);
  }

  ngOnInit(): void {
    document.getElementById("navbar").style.display = ''
    this.dropdownListProvider = [
      { item_id: 1, item_text: 'AWS' },
      { item_id: 2, item_text: 'GCP' },
      { item_id: 3, item_text: 'Azure' }
    ];
    this.selectedItemsProvider = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };

    this.dropdownListCategory = [
      { item_id: 1, item_text: 'Compute' },
      { item_id: 2, item_text: 'Database' },
      { item_id: 3, item_text: 'Storage' }
    ];
    this.selectedItemsCategory = []; 

    console.log(this.dropdownListProvider)
  }

  sort(){
    console.log(this.asc)
    if(this.asc){
      this.serviceListCopy.sort((one,two)=>{return one.rating>two.rating?-1:1});
      this.asc = !this.asc;
    }
    else{
      this.serviceListCopy.sort((one,two)=>{return one.rating>two.rating?1:-1});
      this.asc = !this.asc;
    }
  }

  onProviderSelect(item: any) {
    //this.serviceListCopy = this.serviceList.filter(p => p.providerName === item.item_text)
    //console.log(this.serviceList);
  }
  onProviderSelectAll(items: any) {
    //console.log(items);
  }
  onCategorySelect(item: any) {
    //console.log(item);
  }
  onCategorySelectAll(items: any) {
    //console.log(items);
  }
  Providerchange(item:any){
    if(item.length != 0){
      this.serviceFilterProvider = this.serviceList.filter(p => item.some(i=>i.item_text==p.providerName));
      this.serviceListCopy = this.serviceFilterProvider;
      this.Categorychange([]);
      this.selectedItemsCategory = []
    }
    else{
      this.serviceListCopy = this.serviceList;
      this.serviceFilterProvider = this.serviceListCopy;
      this.Categorychange([]);
      this.selectedItemsCategory = []
    }
  }
  Categorychange(item:any){
    if(item.length != 0){
      this.serviceFilterCategory = this.serviceFilterProvider.filter(p => item.some(i=>i.item_text==p.category));
      this.serviceListCopy = this.serviceFilterCategory;
    }
    else{
      this.serviceListCopy = this.serviceFilterProvider;
      this.serviceFilterCategory = this.serviceListCopy;
    }
  }

  search(text){

    this.NoResult = false;
    const regex = new RegExp(text,'i');

    if(text.length != 0){
        this.serviceListCopy = this.serviceList.filter(p => p.tags.some(t => {
          if(regex.test(t) && p.isApproved) return true;
        }));
        if(this.serviceListCopy.length == 0)
          this.NoResult = true;
          this.errorMessage = 'No result found for "' + this.searchText + '"';
    }

    else
      this.serviceListCopy = this.serviceList;

  }

  selectEvent(item) {
    // do something with selected item
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }

}
