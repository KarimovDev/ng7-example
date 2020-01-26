import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NotificationsService } from '../services/notifications.service';

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationsService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.notificationService.showMessage(error.error);
        return throwError(error);
      })
    );
  }
}
