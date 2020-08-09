import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended-templates',
  templateUrl: './recommended-templates.component.html',
  styleUrls: ['./recommended-templates.component.scss']
})
export class RecommendedTemplatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(history.state.data);
  }

}
