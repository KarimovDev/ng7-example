import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of, timer, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpMockRequestInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(request);
    switch (request.url) {
      case '/api/receive':
        console.log(`Return from mock ${request.url}`);
        if (request.body.limit === 10) {
          return timer(3000).pipe(
            switchMap(el =>
              throwError(
                new HttpErrorResponse({
                  error: 'Серверная ошибка',
                  headers: request.headers,
                  status: 500,
                  statusText: 'Warning',
                  url: request.url,
                })
              )
            )
          );
        } else {
          return timer(3000).pipe(
            switchMap(el =>
              of(
                new HttpResponse({
                  status: 200,
                  body: {
                    status: 200,
                    message: 'OK',
                  },
                })
              )
            )
          );
        }
    }
    console.log(`Return from url ${request.url}`);
    return next.handle(request);
  }
}
