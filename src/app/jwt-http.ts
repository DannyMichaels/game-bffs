import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { JwtService } from './services/jwt.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const jwt = this.jwtService.getJWT();

    if (
      jwt &&
      !this.jwtService.getPersistentJWT() &&
      request.method === 'GET'
    ) {
      this.jwtService.setPersistentJWT(jwt);
    }

    if (!this.jwtService.compareJWTs()) {
      this.jwtService.removePersistentJWT();
      this.router.navigateByUrl('/login');

      return EMPTY;
    }

    if (jwt) {
      request = request.clone({
        setHeaders: {
          Authorization: jwt,
          'x-auth-token': jwt,
        },
      });
    }

    return next.handle(request);
  }
}
