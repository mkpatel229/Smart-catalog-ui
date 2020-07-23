import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  id:number;

  constructor(private router:Router, private route:ActivatedRoute) { 
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit(): void {
    this.router.events.subscribe((path) => {
        window.scrollTo(0, 0);
 });
  }

}
