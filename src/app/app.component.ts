import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges{
  title = 'Smart-catalog-demo';

  Services = [
    {
        "name" : "AWS EC2",
        "Category" : {
            "id" : 1,
            "Name" : "Compute Engine"
        },
        "Param" : {
            "RAM" : "8GB",
            "OS" : ["Windows", "Linux"]
        },
        "Review" : "5",
        "Comments" : [
            {"Userid" : "1", "Comment" : "XYZ"},
            {"Userid" : "2", "Comment" : "abc"}
        ]
    },
    {
        "name" : "GCP compute",
        "Category" : {
            "id" : 1,
            "Name" : "Compute Engine"
        },
        "Param" : {
            "RAM" : "8GB",
            "OS" : ["Windows", "Linux"]
        },
        "Review" : "5",
        "Comments" : [
            {"Userid" : "1", "Comment" : "XYZ"},
            {"Userid" : "2", "Comment" : "abc"}
        ]
    }
  ]

  constructor() {
  }
    ngOnChanges(changes: SimpleChanges): void {
        console.log("hii change")
    }

  ngOnInit(){
  }
}
