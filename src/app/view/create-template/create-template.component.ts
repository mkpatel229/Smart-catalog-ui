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
 logicForTemplateCart
  approvedList:Service[]=[];
  unapprovedList:Service[]=[];
  approvedCombinationList:any[]=[];
  UnapprovedCombinationList:any[]=[];
  CombinedCombinationtList:any[]=[];

  BestApprovedCombination1:String='';
  BestApprovedCombination2:String='';
  BestApprovedCombination3:String='';

  BestUnApprovedCombination1:String='';
  BestUnApprovedCombination2:String='';
  BestUnApprovedCombination3:String='';

  BestCombinedCombination1:String='';
  BestCombinedCombination2:String='';
  BestCombinedCombination3:String='';

  approvedStackMessage:string="Please select enough approved services To complete a stack of combination of storage database and compute";
  unapprovedStackMessage:string="Please select enough Unapproved services To complete a stack of combination of storage database and compute";
  combinedStackMessage:string="Please select enough  services To complete a stack of combination storage of database and compute";
  

  approvedList: Service[] = [];
  unapprovedList: Service[] = [];
  approvedCombinationList: any[] = [];
  UnapprovedCombinationList: any[] = [];
  CombinetList: any[] = [];
  BestApprovedCombination1: String = '';
  BestApprovedCombination2: String = '';
  BestApprovedCombination3: String = '';

  show: boolean = false;


  constructor(private cartService: CartServiceService, private CloudService: CloudService) {
    this.cartService.CartList.forEach(element => {
      CloudService.getService(element).subscribe(s => {
        this.ServiceList.push(s);
        if (s.category == "Database") {
          this.DbList.push(s);
        }
        else if (s.category == "Compute") {
          this.ComputeList.push(s);
        }
        else if (s.category == "Storage") {
          this.StorageList.push(s);
        }
      })
    });
  }

  ngOnInit(): void {
  }

  onTemplateSubmit() {
    console.log("button clicked", this.ServiceList)
    this.unapprovedList = this.ServiceList.filter(service => service.isApproved === false);


   // check rating of the services
  let approvedRatingList=  this.approvedList.filter(service=>service.rating >=4)
   console.log("approved rating List",approvedRatingList);
     
   let approvedRatingListComputed=this.approvedList.every(element=>
    { 
       (element.category==="Database")
      ||(element.category==="Compute")
      ||(element.category==="Storage")
    })

    console.log("check value ",approvedRatingListComputed);
   if(approvedRatingList.length<2 || approvedRatingListComputed)
   {
     this.cartService.ApprovedStackMessage=this.approvedStackMessage
     console.log("Message",this.cartService.ApprovedStackMessage);
   }
   else
   {
    let bestApprovedDb= approvedRatingList.find(service=>service.category==="Database")
    let bestApprovedCompute= approvedRatingList.find(service=>service.category==="Compute")
    let bestApprovedStorage= approvedRatingList.find(service=>service.category==="Storage")
    
    this.BestApprovedCombination1=bestApprovedCompute!=undefined?bestApprovedCompute.serviceName:'';
    this.BestApprovedCombination2=(bestApprovedDb!=undefined?bestApprovedDb.serviceName:'');
    this.BestApprovedCombination3=(bestApprovedStorage!=undefined?bestApprovedStorage.serviceName:'');

    this.approvedList = this.ServiceList.filter(service => service.isApproved === true);

    // check rating of the services
    let approvedRatingList = this.approvedList.filter(service => service.rating >= 4)
    console.log("approved rating List", approvedRatingList)

    let bestApprovedDb = approvedRatingList.find(service => service.category === "Database")
    let bestApprovedCompute = approvedRatingList.find(service => service.category === "Compute")
    let bestApprovedStorage = approvedRatingList.find(service => service.category === "Storage")
    this.BestApprovedCombination1 = bestApprovedCompute?.serviceName;
    this.BestApprovedCombination2 = (bestApprovedDb?.serviceName);
    this.BestApprovedCombination3 = (bestApprovedStorage?.serviceName);


   


    this.approvedCombinationList=approvedRatingList;
    this.cartService.ApprovedList=this.approvedCombinationList;
    console.log("approved list ",this.cartService.ApprovedList);


     this.cartService.BestApprovedCombination1=this.BestApprovedCombination1.toString();
     this.cartService.BestApprovedCombination2=this.BestApprovedCombination2.toString();
     this.cartService.BestApprovedCombination3=this.BestApprovedCombination3.toString();
   }

   // computation logic for unapproved list 
   let unapprovedRatingList=  this.unapprovedList.filter(service=>service.rating >=4)
   console.log("unapproved rating List",unapprovedRatingList)

   let unApprovedRatingListComputed=this.unapprovedList.every(element=>
    {(element.category=="Database")||(element.category=="Compute")||(element.category=="Storage")})

    console.log("check value ",unApprovedRatingListComputed);
   if(unapprovedRatingList.length<2 || unApprovedRatingListComputed)
   {
     this.cartService.UnApprovedStackMessage=this.unapprovedStackMessage
     console.log("Message",this.cartService.UnApprovedStackMessage);
   }
   else
   {
    let bestUnApprovedDb= unapprovedRatingList.find(service=>service.category==="Database")
    let bestUnApprovedCompute= unapprovedRatingList.find(service=>service.category==="Compute")
    let bestUNApprovedStorage= unapprovedRatingList.find(service=>service.category==="Storage")
    
    this.BestUnApprovedCombination1=bestUnApprovedCompute!=undefined?bestUnApprovedCompute.serviceName:'';
    this.BestUnApprovedCombination2=bestUnApprovedDb!=undefined?bestUnApprovedDb.serviceName:'';
    this.BestUnApprovedCombination3=(bestUNApprovedStorage!=undefined?bestUNApprovedStorage.serviceName:'');
    this.UnapprovedCombinationList=unapprovedRatingList;

    this.cartService.UnApprovedList=this.UnapprovedCombinationList;
    console.log("unapproved list ",this.cartService.UnApprovedList);

    this.cartService.BestUnApprovedCombination1=this.BestUnApprovedCombination1.toString();
    this.cartService.BestUnApprovedCombination2=this.BestUnApprovedCombination2.toString();
    this.cartService.BestUnApprovedCombination3=this.BestUnApprovedCombination3.toString();
   }

    // computation logic for combined list 
   let combinedRatingList=  this.ServiceList.filter(service=>service.rating >=4)
   console.log("combined rating List",combinedRatingList)

   let combinedRatingListComputed=this.ServiceList.every(element=>
    {(element.category=="Database")||(element.category=="Compute")||(element.category=="Storage")})

    console.log("check value ",combinedRatingListComputed);
   if(combinedRatingList.length<2 || combinedRatingListComputed)
   {
     this.cartService.CombinedStackMessage=this.combinedStackMessage
     console.log("Message",this.cartService.CombinedStackMessage);
   }
   else
   {
    let bestCombinedDb= combinedRatingList.find(service=>service.category==="Database")
    let bestCombinedCompute= combinedRatingList.find(service=>service.category==="Compute")
    let bestCombinedStorage= combinedRatingList.find(service=>service.category==="Storage")
    
    this.BestCombinedCombination1=bestCombinedCompute!=undefined?bestCombinedCompute.serviceName:'';
    this.BestCombinedCombination2=bestCombinedDb!=undefined?bestCombinedDb.serviceName:'';
    this.BestCombinedCombination3=(bestCombinedStorage!=undefined?bestCombinedStorage.serviceName:'');
    this.CombinedCombinationtList=combinedRatingList;

    this.cartService.CombinedList=this.CombinedCombinationtList;
    console.log("combined list ",this.cartService.CombinedList);

    this.cartService.BestCombinedCombination1=this.BestCombinedCombination1.toString();
    this.cartService.BestCombinedCombination2=this.BestCombinedCombination2.toString();
    this.cartService.BestCombinedCombination3=this.BestCombinedCombination3.toString();
   }


    this.approvedCombinationList = approvedRatingList;
    if (approvedRatingList.length > 0) {
      this.show = !this.show;
    }

    let unapprovedRatingList = this.unapprovedList.filter(service => service.rating >= 4)
    console.log("unapproved rating List", unapprovedRatingList)

    let combinedRatingList = this.ServiceList.filter(service => service.rating >= 4)
    console.log("combined rating List", combinedRatingList)

  }

  clear() {
    console.log("clear function");
    this.cartService.CartList = [];
    this.ServiceList = [];
    this.DbList = [];
    this.ComputeList = [];
    this.StorageList = [];
    document.getElementById('cart').classList.remove('fa-cart-plus');
    document.getElementById('cart').classList.add('fa-shopping-cart');
  }

  close(item: any) {
    this.ServiceList = this.ServiceList.filter(s => s.id != item.id);
    this.cartService.CartList = this.cartService.CartList.filter(s => s != item.id);
    // console.log(this.cartService.CartList)
    if (this.ServiceList.length == 0) {
      this.cartService.CartList = [];
      document.getElementById('cart').classList.remove('fa-cart-plus');
      document.getElementById('cart').classList.add('fa-shopping-cart');
    }
    if (item.category == "Database")
      this.DbList = this.DbList.filter(s => s.id != item.id);
    else if (item.category == "Compute")
      this.ComputeList = this.ComputeList.filter(s => s.id != item.id);
    else if (item.category == "Storage")
      this.StorageList = this.StorageList.filter(s => s.id != item.id);
  }

}
