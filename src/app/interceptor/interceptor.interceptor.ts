import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { EMPTY, Observable, catchError, of, throwError } from 'rxjs';
import { Route, Router } from '@angular/router';


@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("test");

    if (request.url.includes("register") || request.url.includes("authenticate") ) {
      return next.handle(request)
    }

    const loginRequest = request.clone({
      headers: request.headers.set(
        'Authorization',
        'Bearer ' + localStorage.getItem('jwttoken')
       )
    })

    console.log("login", loginRequest);
    
    const addShop = request.clone({
      headers: request.headers.set(
        'Authorization',
        'Bearer ' + localStorage.getItem('jwttoken')
       )

    })
    
    return next.handle(loginRequest).pipe(catchError(
      (error:HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigateByUrl("/login");
          return EMPTY
        }
        return throwError(() => new Error(error.message))
      }
    ))
    
  }
}
