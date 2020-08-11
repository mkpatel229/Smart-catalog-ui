import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { CloudService } from 'src/app/service/cloud.service';
import { Service } from 'src/app/Model/service';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent implements OnInit {

  ServiceList: Service[] = [];
  DbList: Service[] = [];
  ComputeList: Service[] = [];
  StorageList: Service[] = [];

  constructor(private cartService: CartServiceService, private CloudService: CloudService) {
    this.cartService.CartList.forEach(element => {
      CloudService.getService(element).subscribe(s => {
        this.ServiceList.push(s);
        if(s.category == "Database"){
          this.DbList.push(s);
        }
        else if(s.category == "Compute"){
          this.ComputeList.push(s);
        }
        else if(s.category == "Storage"){
          this.StorageList.push(s);
        }
      })
    });
  }

  ngOnInit(): void {
    console.log(this.ServiceList);
    console.log(this.ComputeList);
  }

}
