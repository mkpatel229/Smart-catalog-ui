import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {

  keyword = 'name';
  ischecked=false;
  selectedType = [];
  selectedCloudItems:string[];
  platforms = [
    { id: 1, name: 'Iaas' },
    {id: 2,name: 'Paas'},
    {id: 3,name: 'Saas'}
  ];

  databaseTypes = [
    {id: 1,name: 'Sql'},
    {id: 2,name: 'No-Sql'}
  ];

  cloudProviders = [
    {id: 1,name: 'Aws',isChecked: false},
    {id: 2,name: 'Gcp',isChecked: false},
    {id: 3,name: 'Azure',isChecked: false}
  ]

  constructor() { }

  ngOnInit(): void {
    this.selectedCloudItems = new Array<string>();
  }

  onSubmit(values) {
    console.log("form values ", values)
  }

  getCloudProvider(event:any,name:string)
  {
    if(event.target.checked)
    {
      this.selectedCloudItems.push(name)
    }
    else{
   this.selectedCloudItems=  this.selectedCloudItems.filter(m=>m!=name)
    }

    console.log(this.selectedCloudItems)
  }

  selectEvent(item) {
    // do something with selected item
    console.log("hi")
    console.log(item)
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }


}
