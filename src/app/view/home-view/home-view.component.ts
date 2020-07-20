import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {Service} from '../../service'

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  dropdownListProvider = [];
  selectedItemsProvider = [];
  dropdownListCategory = [];
  selectedItemsCategory = [];
  dropdownSettings:IDropdownSettings;

  serviceList: Service[];
  serviceListCopy: Service[];

  constructor() { 
    
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

    this.serviceList = [
      {
        serviceName : "EC2",
        category : "Compute",
        providerName : "AWS",
        description : "AWS provide VM"
      },
      {
        serviceName : "VM",
        category : "Compute",
        providerName : "Azure",
        description : "Azure provide VM"
      },
      {
        serviceName : "Compute Engine",
        category : "Compute",
        providerName : "GCP",
        description : "GCP provide VM"
      },
      {
        serviceName : "Compute Engine",
        category : "Compute",
        providerName : "GCP",
        description : "GCP provide VM"
      },
      {
        serviceName : "Compute Engine",
        category : "Compute",
        providerName : "GCP",
        description : "GCP provide VM"
      }
    ];
    this.serviceListCopy = this.serviceList
  }

  onProviderSelect(item: any) {
    this.serviceListCopy = this.serviceList.filter(p => p.providerName === item.item_text)
    console.log(this.serviceList);
  }
  onProviderSelectAll(items: any) {
    console.log(items);
  }
  onCategorySelect(item: any) {
    console.log(item);
  }
  onCategorySelectAll(items: any) {
    console.log(items);
  }

}
