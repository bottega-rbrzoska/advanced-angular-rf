import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { NotificationsModule } from 'dist/rf-lib';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    NotificationsModule.forRoot()
  ]
})
export class CoreModule { }
