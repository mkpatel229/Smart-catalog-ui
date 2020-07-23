import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Model/service';
import { CloudService } from 'src/app/service/cloud.service';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  id:number;
  imgUrl:string = "../../../assets/";
  service:Service;
  desc:string = 'active';
  spec:string = 'deActive';
  review:string = 'deactive';


  constructor(private router:Router, private route:ActivatedRoute, private _cloudService:CloudService) { 
    this.id = +this.route.snapshot.paramMap.get('id');
    this._cloudService.getService(this.id).subscribe(s=>{
      this.service=s;
      this.imgUrl = this.imgUrl + this.service.providerName + ".jpg";
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((path) => {
        window.scrollTo(0, 0);
    });
  }

  openTabDesc(){
    this.desc='active'
    this.spec='deActive'
    this.review='deActive'
  }

  openTabSpec(){
    this.desc='deActive'
    this.spec='active'
    this.review='deActive'
  }

  openTabRevire(){
    this.desc='deActive'
    this.spec='deActive'
    this.review='active'
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }


}
