import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Templates } from 'src/app/Model/templates.model';
import { CloudService } from 'src/app/service/cloud.service';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-template-detail',
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.scss']
})
export class TemplateDetailComponent implements OnInit {

  id:number;
  imgUrl:string = "../../../assets/";
  template:Templates;
  desc:string = 'active';
  spec:string = 'deActive';
  review:string = 'deactive';


  constructor(private router:Router, private route:ActivatedRoute, private _cloudService:CloudService) { 
    this.id = +this.route.snapshot.paramMap.get('id');
    this._cloudService.getTemplateById(this.id).subscribe(s=>{
      this.template=s;
      this.imgUrl += "template.jpg";
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


}
