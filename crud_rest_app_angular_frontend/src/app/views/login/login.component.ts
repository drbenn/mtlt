import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { GetUserHistoryOnLogin } from 'src/app/core/state/appState.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
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

  onLoginSubmit() {
    console.warn('onLoginSubmit');
    console.log(this.loginForm.value);
  }

  submitLogin() {
    console.warn('submitLogin');
    console.log(this.loginForm.value);
    console.log(this.loginForm.value.username);
    this.store.dispatch(
      new GetUserHistoryOnLogin(this.loginForm.value.username)
    );
  }
}
