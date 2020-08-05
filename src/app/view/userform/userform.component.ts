import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {

  keyword = 'name';
  selectedType = [];
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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(values)
  {
    console.log("form values ",values)
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
  
  onFocused(e){
    // do something when input is focused
  }


}
