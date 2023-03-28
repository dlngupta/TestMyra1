import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  userName:string="";
  passWord:string="";
  loginClicked:boolean=false;
  Login(){
    this.loginClicked=true;
    if(this.userName && this.passWord ){
    if(  this.userName.toLocaleLowerCase()=="admin" && this.passWord.toLocaleLowerCase()=="admin123")
    {
      alert("Admin Login Successfully");
      this._router.navigate(['/users'])
    }else{
      alert("Login Failed");
    }
  }
  }

}
