import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { UserLogin } from 'src/app/core/models/loggedInUser.model';
import { UserService } from 'src/app/core/services/user.service';
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
  loginFailed: boolean = false;
  submittedLoginResponseMessage:string;
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private matDialog: MatDialog,
    private userService: UserService,
    private _router:Router
  ) {}

  ngOnInit(): void {
    this.userService.loginStatusEmitter.subscribe((value)=>{
      this.submittedLoginResponseMessage=value;
      if (this.submittedLoginResponseMessage === 'Login Successful') {
          this._router.navigate(['workout'])
      }

    })
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

  // onLoginSubmit() {
  //   console.warn('onLoginSubmit');
  //   console.log(this.loginForm.value);
  // }

  // onClickSubmitLogin() {
  //   let submittedLogin: UserLogin = {
  //     username: this.loginForm.value.username,
  //     password: this.loginForm.value.password,
  //   };
  //   if (confirm('Login?')) {
  //     console.warn('submitLogin');
  //     console.log(this.loginForm.value);
  //     console.log(this.loginForm.value.username);
  //     this.store.dispatch(new UpdateLoginStatus(true));
  //     this.store.dispatch(
  //       new GetUserHistoryOnLogin(this.loginForm.value.username)
  //     );
  //   }
  // }

  async submitClickLogin() {
    console.warn(this.loginForm.value)
    let formValues = this.loginForm.value
    await this.userService.loginUser(formValues)
  }
  onTestAppDialog() {
    console.log('test dialog');
    this.matDialog.open(DialogTestLoginInfoComponent, {
      disableClose: false,
      hasBackdrop: true,
    });
  }
}
