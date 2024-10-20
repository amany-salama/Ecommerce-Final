import { LocationStrategy } from '@angular/common';
import { Component, inject  } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoginView:boolean =false;
userObj :any ={
  userName:" ",
  password: "",
  email:"",
}
userLogin :any={
  password: "",
  email:"",
}
router = inject (Router);
onRegister(){
  debugger;
  const isLocalDate=localStorage.getItem("Angular18Local");
  if (isLocalDate != null){
    const localArray=JSON.parse(isLocalDate);
    localArray.push(this.userObj);
    localStorage.setItem("Angular18Local" , JSON.stringify(localArray))
  }
  else{
    const localArray=[];
    localArray.push(this.userObj);
    localStorage.setItem("Angular18Local" , JSON.stringify(localArray))
  }
 this.isLoginView=true;
}
onLogin(){
  debugger;
  const isLocalDate=localStorage.getItem("Angular18Local");
  if (isLocalDate != null){
    const users=JSON.parse(isLocalDate);
    const isUserFound= users.find((m:any) =>m.password ==this.userLogin.password && m.Email ==this.userLogin.Email  );
    if ( isUserFound != undefined){
      this.router.navigateByUrl("home")
      
    }
    else{
      alert("user Email or password is wrong")

    }
  }
  else{
    alert("No User Found")
  }

}
}
