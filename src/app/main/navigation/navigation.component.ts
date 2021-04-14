import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'rf-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isLoggedIn$: Observable<boolean>
  constructor(private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn$
  }

  ngOnInit(): void {
  }

  login(){
    this.authService.login()
  }

  logout(){
    this.authService.logout()
  }

}
