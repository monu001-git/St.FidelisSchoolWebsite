import { HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { AuthService } from '../service/auth.service';

export const commonInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const token = authService.getToken();
  let authReq = req;
  if (token) {
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }

  return next(authReq).pipe(
    tap((event) => {
      console.log(`✅ HTTP Request: ${req.method} ${req.url}`);
    }),
    catchError((error: HttpErrorResponse) => {
      console.error('🚨 HTTP Error:', error);

      // 🔹 Handle Specific HTTP Status Codes
      switch (error.status) {
        case 400:
          console.log('Bad Request! Please check your input.');
          break;
        case 401:
          console.log('Unauthorized! Please log in again.');
          authService.logout();
          router.navigate(['']);
          break;
        case 403:
          console.log('Access Denied! You do not have permission.');
          router.navigate(['/forbidden']);
          break;
        case 404:
          console.log('Resource Not Found.');
         // router.navigate(['**']);
          break;
        case 500:
          console.log('Internal Server Error! Try again later.');
       //   router.navigate(['**']);
          break;
        case 0:
          console.log('Network Error! Please check your internet connection.');
          break;
        default:
          console.log(`Unexpected Error (${error.status}): ${error.message}`);
      }

      return throwError(() => error);
    })
  );
};
