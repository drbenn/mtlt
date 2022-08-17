import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoggedInUser, UserRegister } from 'src/app/core/models/loggedInUser.model';
import { AuthService } from 'src/app/core/services/auth.service';
import {
  GetUserHistoryOnLogin,
  UpdateLoginStatus,

} from 'src/app/core/state/appState.actions';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  dbData$: Observable<any> | undefined;

  isUserLoggedIn: boolean = false;
  public innerWidth: any;
  usernameForDisplay: string = '';

  constructor(private store: Store, private authService: AuthService) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    let userLoggedIn$: Observable<boolean> = this.store.select(
      (state) => state.appState.isUserLoggedIn
    );
    userLoggedIn$.subscribe((_userLoggedIn$: boolean) => {
      this.isUserLoggedIn = _userLoggedIn$;
    });

    let username$: Observable<string> = this.store.select(
      (state) => state.appState.username
    );
    username$.subscribe((_username$: string) => {
      // if (_username$ !== undefined) {
      //   console.log(_username$);
      //   this.usernameForDisplay = _username$;
      // }
      this.usernameForDisplay = _username$;
      console.log(_username$);
    });
  }

  dbTest() {
    this.dbData$ = this.authService.getDisplay();
    this.dbData$.subscribe((data:any)=> {console.log(data)});
    console.log('after');
    console.log(this.dbData$);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

  userLogIn() {
    // this.store.dispatch(new UpdateUsername());
    // console.log('logIN triggered');
    // this.store.dispatch(new UpdateLoginStatus(true));
  }

  userLogOut() {
    // console.log('logOUT in triggered');
    this.usernameForDisplay = '';
    this.isUserLoggedIn = false;
    this.store.dispatch(new UpdateLoginStatus(false));
  }
}
