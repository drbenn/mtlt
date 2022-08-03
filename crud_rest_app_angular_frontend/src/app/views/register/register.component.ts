import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegistration } from 'src/app/core/models/loggedInUser.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
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

  onRegisterSubmit() {
    console.warn('Register form submitted');
    console.log(this.registerForm.value);
  }
  submitClickRegister() {
    // if username exists alert box indicating cant register with that name
    console.warn('submitLogin');
    console.log(this.registerForm.value);
    let requestedRegistrationInfo: UserRegistration = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      date: new Date(),
    };
    console.log(requestedRegistrationInfo);
  }
}
