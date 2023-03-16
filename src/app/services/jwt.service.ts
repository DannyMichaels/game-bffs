import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  private persistentJWT: string | null = null;

  // Get Persistent JWT
  getPersistentJWT() {
    return this.persistentJWT;
  }

  // Only Set This At Auth
  setPersistentJWT(jwt: string) {
    this.persistentJWT = jwt;
  }

  // Remove on Logout
  removePersistentJWT() {
    this.persistentJWT = null;
  }

  // Get JWT from Local Storage
  getJWT() {
    return localStorage.getItem('jwt');
  }

  // Compare JWTs
  compareJWTs() {
    return this.persistentJWT === this.getJWT();
  }
}
