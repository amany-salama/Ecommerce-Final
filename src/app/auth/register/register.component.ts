// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent {

// }
// register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
    standalone: true,
    imports: [RouterModule , CommonModule , FormsModule, ReactiveFormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  goLogin(){
    this.router.navigate(['login']);

  }
  onSubmit() {
    const {  email, password } = this.registerForm.value;
    if (this.authService.register( email, password ,)) {
      this.router.navigate(['login']);
    } else {
      alert('Username already exists');
    }
  }
}
