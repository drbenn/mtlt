import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import {
  GetUserHistoryOnLogin,
  UpdateLoginStatus,
} from 'src/app/core/state/appState.actions';
import { DialogTestLoginInfoComponent } from '../dialog-test-login-info/dialog-test-login-info.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private matDialog: MatDialog
  ) {}

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
    if (confirm('Login?')) {
      console.warn('submitLogin');
      console.log(this.loginForm.value);
      console.log(this.loginForm.value.username);
      this.store.dispatch(new UpdateLoginStatus(true));
      this.store.dispatch(
        new GetUserHistoryOnLogin(this.loginForm.value.username)
      );
    }
  }

  onTestAppDialog() {
    console.log('test dialog');
    this.matDialog.open(DialogTestLoginInfoComponent, {
      disableClose: false,
      hasBackdrop: true,
    });
  }
}
