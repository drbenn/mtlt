import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  GetUserHistoryOnLogin,
  UpdateLoginStatus,
  UpdateUsername,
} from 'src/app/core/state/appState.actions';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  public innerWidth: any;
  usernameForDisplay: string = 'Username PlaceHolder';

  constructor(private store: Store) {}

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
      console.log(_username$);
    });
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
