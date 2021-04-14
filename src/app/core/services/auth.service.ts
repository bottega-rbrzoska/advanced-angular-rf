import { Injectable } from '@angular/core';
import { OAuthEvent, OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { authConfig } from 'src/app/configs/auth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authSub = new BehaviorSubject(false);

  isLoggedIn$ = this.authSub.asObservable();

  constructor(private oauth: OAuthService) {
    this.oauth.configure(authConfig);
    this.oauth.loadDiscoveryDocumentAndTryLogin().then(() => {
      this.authSub.next(this.oauth.hasValidAccessToken())
    });

    this.oauth.events
    .pipe(
      filter(e => e.type === 'token_received' || e.type === 'token_refreshed')
    )
    .subscribe((e: OAuthEvent) => {
      console.log(e)
      this.authSub.next(this.oauth.hasValidAccessToken());
    })
   }


   login() {
     this.oauth.initCodeFlow()
   }

   logout() {
     this.oauth.revokeTokenAndLogout();
     this.authSub.next(false)
   }
}
