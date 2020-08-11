import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/Model/service';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-combinationtemplate',
  templateUrl: './combinationtemplate.component.html',
  styleUrls: ['./combinationtemplate.component.scss']
})
export class CombinationtemplateComponent implements OnInit {
  constructor(private cartservice:CartServiceService) { }

  ServiceList=[];
  ApprovedList=[];
  UnApprovedList=[];
  CombinedList=[];

  ApprovedStackMessage="";
  UnApprovedStackMessage="";
  CombinedStackMessage="";

  BestApprovedCombination1="";
  BestApprovedCombination2='';
  BestApprovedCombination3='';

  BestUnApprovedCombination1='';
  BestUnApprovedCombination2='';
  BestUnApprovedCombination3='';

  BestCombinedCombination1='';
  BestCombinedCombination2='';
  BestCombinedCombination3='';

  ngOnInit(): void {
    this.ServiceList=this.cartservice.CartList;

    this.BestApprovedCombination1 =this.cartservice.BestApprovedCombination1
    this.BestApprovedCombination2 =this.cartservice.BestApprovedCombination2
    this.BestApprovedCombination3 =this.cartservice.BestApprovedCombination3

    this.BestUnApprovedCombination1 =this.cartservice.BestUnApprovedCombination1
    this.BestUnApprovedCombination2 =this.cartservice.BestUnApprovedCombination2
    this.BestUnApprovedCombination3 =this.cartservice.BestUnApprovedCombination3

    this.BestCombinedCombination1 =this.cartservice.BestCombinedCombination1
    this.BestCombinedCombination2 =this.cartservice.BestCombinedCombination2
    this.BestCombinedCombination3 =this.cartservice.BestCombinedCombination3

    this.ApprovedStackMessage=this.cartservice.ApprovedStackMessage
    this.UnApprovedStackMessage=this.cartservice.UnApprovedStackMessage
    this.CombinedStackMessage=this.cartservice.CombinedStackMessage
  }



}
