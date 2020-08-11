import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  CartList = [];
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

  constructor() { }
}
