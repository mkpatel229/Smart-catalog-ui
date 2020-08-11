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
  approvedList:Service[]=[];
  unapprovedList:Service[]=[];
  approvedCombinationList:any[]=[];
  UnapprovedCombinationList:any[]=[];
  CombinetList:any[]=[];
  BestApprovedCombination1:String='';
  BestApprovedCombination2:String='';
  BestApprovedCombination3:String='';

  show:boolean=false;
  

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

  onTemplateSubmit(){
  console.log("button clicked",this.ServiceList)
  this.unapprovedList= this.ServiceList.filter(service=>service.isApproved===false);
  
  this.approvedList=this.ServiceList.filter(service=>service.isApproved===true);

   // check rating of the services
  let approvedRatingList=  this.approvedList.filter(service=>service.rating >=4)
   console.log("approved rating List",approvedRatingList)

   let bestApprovedDb= approvedRatingList.find(service=>service.category==="Database")
   let bestApprovedCompute= approvedRatingList.find(service=>service.category==="Compute")
   let bestApprovedStorage= approvedRatingList.find(service=>service.category==="Storage")
   this.BestApprovedCombination1=bestApprovedCompute.serviceName;
   this.BestApprovedCombination2=(bestApprovedDb.serviceName);
   this.BestApprovedCombination3=(bestApprovedStorage.serviceName);



    this.approvedCombinationList=approvedRatingList;
    if(approvedRatingList.length>0)
    {
      this.show=!this.show;
    }
   
   let unapprovedRatingList=  this.unapprovedList.filter(service=>service.rating >=4)
   console.log("unapproved rating List",unapprovedRatingList)

   let combinedRatingList=  this.ServiceList.filter(service=>service.rating >=4)
   console.log("combined rating List",combinedRatingList)
  }

 


}
