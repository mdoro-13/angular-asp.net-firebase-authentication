import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error) {
          // Since this is a demo, we will focus on the 401 unauthorized scenario, when we attempt to access a protected endpoint
          console.log(error);
          switch (error.status) {
            case 401:
              this.toastr.error("Unauthorized !!!");
              break;

            default:
              this.toastr.error("Something went wrong !!!");
              break;
          }
        }

        return throwError(() => new Error(error));
      })
    )
  }
}
