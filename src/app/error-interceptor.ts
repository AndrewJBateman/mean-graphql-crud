// intercepts all outgoing requests and adds the auth header
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ErrorComponent } from './error/error.component';
import { ErrorService } from './error/error.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog, private errorService: ErrorService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next
      .handle(req) // handle gives back response observable stream
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = 'An unknown error occured';
          if (error.error.message) {
            errorMessage = error.error.message;
          }
          this.dialog.open(ErrorComponent, {data: {message: errorMessage}});
          return throwError(error);
        })
      );
  }
}
