import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://brzoska.eu.auth0.com/',
  clientId: 'gN2nN7hdS92nAdaBcAm9p8YlvuX7Y72E',
  redirectUri: window.location.origin,
  scope: 'openid profile email offline_access',
  responseType: 'code',
  logoutUrl: 'https://brzoska.eu.auth0.com/v2/logout',
};

