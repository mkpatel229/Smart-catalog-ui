import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Templates } from '../../Model/templates.model'
import { CloudService } from '../../service/cloud.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-template-list-view',
  templateUrl: './template-list-view.component.html',
  styleUrls: ['./template-list-view.component.scss']
})
export class TemplateListViewComponent implements OnInit {

  asc: boolean = false;
  errorMessage: string;
  searchText: string = ""
  NoResult = false;

  dropdownListProvider = [];
  selectedItemsProvider = [];
  dropdownListCategory = [];
  selectedItemsCategory = [];
  dropdownSettings: IDropdownSettings;

  templateList: Templates[] = [];
  templateListCopy: Templates[];
  templateFilterProvider: Templates[];
  templateFilterCategory: Templates[];

  constructor(private cloudService: CloudService, private router: Router) {
    this.router.events.subscribe((path) => {
      window.scrollTo(0, 0);
    });

    this.cloudService.getTemplates().subscribe(template => {
      this.templateList = template;
      this.templateListCopy = this.templateList
      this.templateFilterProvider = this.templateList
      this.templateFilterCategory = this.templateList
      if (history.state.data == 'approved') {
        this.templateList = this.templateList.filter(t => t.isApproved == true);
        this.templateListCopy = this.templateList;
      }
      else if (history.state.data == 'recommended') {
        this.templateListCopy.sort((one, two) => { return one.rating > two.rating ? 1 : -1 });
      }
    }, error => this.errorMessage = <any>error);
  }

  ngOnInit(): void {

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
      { item_id: 1, item_text: '3-Tier' },
      { item_id: 2, item_text: '5-Tier' },
      { item_id: 3, item_text: '2-Tier' }
    ];
    this.selectedItemsCategory = [];

  }

  sort() {
    if (this.asc) {
      this.templateListCopy.sort((one, two) => { return one.rating > two.rating ? -1 : 1 });
      this.asc = !this.asc;
    }
    else {
      this.templateListCopy.sort((one, two) => { return one.rating > two.rating ? 1 : -1 });
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
  // Providerchange(item: any) {
  //   if (item.length != 0) {
  //     this.templateFilterProvider = this.templateList.filter(p => item.some(i => i.item_text == p.providerName));
  //     this.templateListCopy = this.templateFilterProvider;
  //     this.Categorychange([]);
  //     this.selectedItemsCategory = []
  //   }
  //   else {
  //     this.templateListCopy = this.templateList;
  //     this.templateFilterProvider = this.templateListCopy;
  //     this.Categorychange([]);
  //     this.selectedItemsCategory = []
  //   }
  // }
  Categorychange(item: any) {
    if (item.length != 0) {
      this.templateFilterCategory = this.templateFilterProvider.filter(p => item.some(i => i.item_text == p.category));
      this.templateListCopy = this.templateFilterCategory;
    }
    else {
      this.templateListCopy = this.templateFilterProvider;
      this.templateFilterCategory = this.templateListCopy;
    }
  }

  search(text) {

    this.NoResult = false;
    const regex = new RegExp(text, 'i');

    if (text.length != 0) {
      this.templateListCopy = this.templateList.filter(p => p.tags.some(t => {
        if (regex.test(t) && p.isApproved) return true;
      }));
      if (this.templateListCopy.length == 0)
        this.NoResult = true;
      this.errorMessage = 'No result found for "' + this.searchText + '"';
    }

    else
      this.templateListCopy = this.templateList;

  }

  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }

}
