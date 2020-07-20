import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

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

  constructor() { 
    
  }

  ngOnInit(): void {
    document.getElementById("navbar").style.display = ''
    this.dropdownListProvider = [
      { item_id: 1, item_text: 'AWS' },
      { item_id: 2, item_text: 'GCP' },
      { item_id: 3, item_text: 'Azure' }
    ];
    this.selectedItemsProvider = this.dropdownListProvider;
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
    this.selectedItemsCategory = this.dropdownListCategory;
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
