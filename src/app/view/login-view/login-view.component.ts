import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  constructor(private _router: Router) {
    document.getElementById("navbar").style.display = 'none'
    document.getElementById("view").style.paddingTop = '0'
   }

  ngOnInit(): void {
  }

  onSubmit(){
    document.getElementById("navbar").style.display = ''
    document.getElementById("view").style.paddingTop = '51px'
    this._router.navigate(['/home']);
  }

}
