import { NgModule } from '@angular/core';
import  {FormsModule} from "@angular/forms"
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'',component:AppComponent},
    {path:'login',component:LoginComponent},
    {path:'users',component:UsersComponent}
  ])],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }
