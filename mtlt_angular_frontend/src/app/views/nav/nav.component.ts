import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoggedInUser, UserRegister } from 'src/app/core/models/loggedInUser.model';
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
  public innerWidth: any;
  isUserLoggedIn: boolean = false;
  usernameForDisplay: string = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

    const userLoggedIn$: Observable<boolean> = this.store.select(
      (state) => state.appState.isUserLoggedIn
    );
    const username$: Observable<string> = this.store.select(
      (state) => state.appState.username
    );

    userLoggedIn$.subscribe((_userLoggedIn$: boolean) => {
      this.isUserLoggedIn = _userLoggedIn$;
    });
    username$.subscribe((_username$: string) => {
      this.usernameForDisplay = _username$;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

  userLogOut() {
    this.usernameForDisplay = '';
    this.isUserLoggedIn = false;
    this.store.dispatch(new UpdateLoginStatus(false));
  }
}
