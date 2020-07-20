import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
    let temp = this.Services.filter(p => p.Comments = p.Comments.filter(c=>c.Comment==="XYZ"));
    console.log(temp);
  }

  ngOnInit(){
  }
}
