import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from "../authentication/authentication.service";

@Injectable()
export class CommonHttpInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private authenticationService: AuthenticationService
  ) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {});
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    // intercept(request: HttpRequest<unknown>, next: HttpHandler): any {
    if (!window.navigator.onLine) {
      //this.router.navigateByUrl("/no-internet");
      window.alert("NO INTERNET OR POOR INTERNET CONNECTION");
    }
    else {
      const BEARER_TOKEN = window.localStorage.getItem("Token");

      if (BEARER_TOKEN) {
        const USER_DETAILS_STRING = window.atob(BEARER_TOKEN.split(".")[1]);
        const USER_DETAILS_JSON = JSON.parse(USER_DETAILS_STRING);
        const USER_ID = USER_DETAILS_JSON._id;
        request = request.clone({
          setHeaders: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${BEARER_TOKEN}`
          },
          // setParams:{
          //   userId: USER_ID
          // },
          // url : request.url + "/" + USER_ID,
        });
      }
      // console.log(request);
      // return next.handle(request);
    }
    return next.handle(request).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0) {
          // 401 handled in auth.interceptor

          this.openSnackBar("Something went wrong. Please try again. ERR_CODE: CONNECTION_REFUSED", "OK");
          setInterval (()=> {location.reload()}, (1000 * 60));
          // console.log(error);
        }
        if (error.status === 401) this.authenticationService.logout();
        throw (error);
      })
    ) as Observable<HttpEvent<any>>;
    // }
  }
}
