import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegister} from 'src/app/core/models/loggedInUser.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  submittedRegistrationResponseMessage:string;

  constructor(private fb: FormBuilder, private userService:UserService, private _router:Router) {}

  ngOnInit(): void {
    this.userService.registrationStatusEmitter.subscribe((value)=>{
      this.submittedRegistrationResponseMessage=value;
      if (this.submittedRegistrationResponseMessage === 'Registration Successful') {
          this._router.navigate(['login'])
      }

    })
    this.registerForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  // onRegisterSubmit() {
  //   console.warn('Register form submitted');
  //   console.log(this.registerForm.value);
  // }
  // submitClickRegister() {
  //   // if username exists alert box indicating cant register with that name
  //   console.warn('submitLogin');
  //   console.log(this.registerForm.value);
  //   let requestedRegistrationInfo: UserRegister = {
  //     username: this.registerForm.value.username,
  //     email: this.registerForm.value.email,
  //     password: this.registerForm.value.password,
  //     joinDate: new Date(),
  //   };
  //   console.log(requestedRegistrationInfo);
  // }

  async submitClickRegister() {
    // console.warn(this.registerForm.value)
    let formValues = this.registerForm.value
    let submitValue = await this.userService.registerUser(formValues)
    console.log(submitValue);



  }


}
