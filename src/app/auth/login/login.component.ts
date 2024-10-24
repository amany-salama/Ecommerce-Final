import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

// }
// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// Other imports
@Component({
  selector: 'app-login',
    standalone: true,
    imports: [RouterModule , CommonModule , FormsModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) 
  {this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]], // Correct array placement for validators
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  }
  //{
  //   this.loginForm = this.fb.group({
  //     email: ['', Validators.required ,  Validators.email],
  //     password: ['', Validators.required , Validators.minLength(8)]
  //   });
  // }
goSignUp(){
  this.router.navigate(['register']);
}
  onSubmit() {
    const { email, password } = this.loginForm.value;
    if (this.authService.login(email, password)) {
      this.router.navigate(['home']); // assuming a dashboard route
    } else {
      alert('Invalid username or password');
    }
  }
  clearStorage() {
    // Clear all data from localStorage
    localStorage.clear();
    console.log('Local storage cleared');
    this.router.navigate(['/login']);  // Optionally navigate to another route
  }
}
