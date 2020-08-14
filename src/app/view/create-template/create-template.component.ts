import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { CloudService } from 'src/app/service/cloud.service';
import { Service } from 'src/app/Model/service';
import { ThrowStmt } from '@angular/compiler';
import { Stack } from 'src/app/Model/Stack';
import { Router } from '@angular/router';

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

  categories: String[] = [];

  approveStackArray: any[] = [];

  approvedList: Service[] = [];
  unapprovedList: Service[] = [];

  approvedRatingList: Service[] = [];
  unapprovedRatingList: Service[] = [];
  combinedRatingList: Service[] = [];

  approvedCombinationList: any[] = [];
  UnapprovedCombinationList: any[] = [];
  CombinedCombinationtList: any[] = [];

  BestApprovedCombination1: String = '';
  BestApprovedCombination2: String = '';
  BestApprovedCombination3: String = '';

  BestUnApprovedCombination1: String = '';
  BestUnApprovedCombination2: String = '';
  BestUnApprovedCombination3: String = '';

  BestCombinedCombination1: String = '';
  BestCombinedCombination2: String = '';
  BestCombinedCombination3: String = '';

  approvedStackMessage: string = "Please select enough approved services To complete a stack of combination of storage database and compute";
  unapprovedStackMessage: string = "Please select enough Unapproved services To complete a stack of combination of storage database and compute";
  combinedStackMessage: string = "Please select enough  services To complete a stack of combination storage of database and compute";




  show: boolean = false;
  flag: boolean = false;
  disable: boolean = true;

  constructor(private cartService: CartServiceService, private CloudService: CloudService, private router: Router) {
    this.cartService.CartList.forEach(element => {
      this.CloudService.getService(element).subscribe(s => {
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
        if(this.ServiceList.length != 0){
          this.disable = false;
        }
      })
    });
  }

  ngOnInit(): void {

  }

  getApprovedList() {
    this.approvedList = this.ServiceList.filter(service => service.isApproved === true);

    // check rating of the services
    let aprrovedRatingList = this.approvedList.filter(service => service.rating >= 4)
    console.log("approved rating List", aprrovedRatingList);

    aprrovedRatingList.forEach(e => this.categories.push(e.category))
    console.log("categories", this.categories)

    var flag = (this.categories.includes("Database")
      && this.categories.includes("Storage")
      && this.categories.includes("Compute")
    )
    if (aprrovedRatingList.length < 2 && !flag) {
      this.cartService.ApprovedStackMessage = this.approvedStackMessage
    }
    else {

      let bestApprovedDb = aprrovedRatingList.find(service => service.category === "Database")
      let bestApprovedCompute = aprrovedRatingList.find(service => service.category === "Compute")
      let bestApprovedStorage = aprrovedRatingList.find(service => service.category === "Storage")



      this.approveStackArray.push(bestApprovedDb);
      this.approveStackArray.push(bestApprovedCompute);
      this.approveStackArray.push(bestApprovedStorage);

      this.cartService.approveStackArray = this.approveStackArray
    }
  }

  getUnApprovedList() {
    this.unapprovedList = this.ServiceList.filter(service => service.isApproved === false);

    // computation logic for unapproved list 
    this.unapprovedRatingList = this.unapprovedList.filter(service => service.rating >= 4)
    console.log("unapproved rating List", this.unapprovedRatingList)

    if (this.unapprovedRatingList.length < 2) {
      this.cartService.UnApprovedStackMessage = this.unapprovedStackMessage
      console.log("Message", this.cartService.UnApprovedStackMessage);
    }
    else {
      let bestUnApprovedDb = this.unapprovedRatingList.find(service => service.category === "Database")
      let bestUnApprovedCompute = this.unapprovedRatingList.find(service => service.category === "Compute")
      let bestUNApprovedStorage = this.unapprovedRatingList.find(service => service.category === "Storage")

      this.BestUnApprovedCombination1 = bestUnApprovedCompute != undefined ? bestUnApprovedCompute.serviceName : '';
      this.BestUnApprovedCombination2 = bestUnApprovedDb != undefined ? bestUnApprovedDb.serviceName : '';
      this.BestUnApprovedCombination3 = (bestUNApprovedStorage != undefined ? bestUNApprovedStorage.serviceName : '');
      this.UnapprovedCombinationList = this.unapprovedRatingList;

      this.cartService.UnApprovedList = this.UnapprovedCombinationList;
      console.log("unapproved list ", this.cartService.UnApprovedList);

      this.cartService.BestUnApprovedCombination1 = this.BestUnApprovedCombination1.toString();
      this.cartService.BestUnApprovedCombination2 = this.BestUnApprovedCombination2.toString();
      this.cartService.BestUnApprovedCombination3 = this.BestUnApprovedCombination3.toString();
    }


  }

  getCombinedList() {
    this.combinedRatingList = this.ServiceList.filter(service => service.rating >= 4)
    console.log("combined rating List", this.combinedRatingList)


    if (this.combinedRatingList.length < 2) {
      this.cartService.CombinedStackMessage = this.combinedStackMessage
      console.log("Message", this.cartService.CombinedStackMessage);
    }
    else {
      let bestCombinedDb = this.combinedRatingList.find(service => service.category === "Database")
      let bestCombinedCompute = this.combinedRatingList.find(service => service.category === "Compute")
      let bestCombinedStorage = this.combinedRatingList.find(service => service.category === "Storage")

      this.BestCombinedCombination1 = bestCombinedCompute != undefined ? bestCombinedCompute.serviceName : '';
      this.BestCombinedCombination2 = bestCombinedDb != undefined ? bestCombinedDb.serviceName : '';
      this.BestCombinedCombination3 = (bestCombinedStorage != undefined ? bestCombinedStorage.serviceName : '');
      this.CombinedCombinationtList = this.combinedRatingList;

      this.cartService.CombinedList = this.CombinedCombinationtList;
      console.log("combined list ", this.cartService.CombinedList);

      this.cartService.BestCombinedCombination1 = this.BestCombinedCombination1.toString();
      this.cartService.BestCombinedCombination2 = this.BestCombinedCombination2.toString();
      this.cartService.BestCombinedCombination3 = this.BestCombinedCombination3.toString();
    }
  }

  onTemplateSubmit() {

    //Approved List
    this.getApprovedList()
    //Unapproved List
    this.getUnApprovedList();
    //Combined List
    this.getCombinedList();

    this.router.navigate(['/combination'])
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
