import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(private _router:Router){

  }
  title = 'MyraSwimmingPool';
  ngOnInit(){
this._router.navigate(['/login'])
  }
  
}
