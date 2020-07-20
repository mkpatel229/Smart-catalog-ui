import { Component, OnInit, Input } from '@angular/core';
import {Service} from '../../../service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() service: Service;

  constructor() { }

  ngOnInit(): void {
  }

}
