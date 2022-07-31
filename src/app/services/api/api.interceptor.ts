import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private apiKey = environment.apiKey;
  private hash = environment.hash;
  private ts = environment.ts;

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("entre al interceptor");
    const token = sessionStorage.getItem('token');

    request = request.clone({
      setParams: {
        apikey: this.apiKey,
        hash: this.hash,
        ts: this.ts
      },
      setHeaders: {
        Accept: '*/*'
      }
    });

    return next.handle(request).pipe(tap(() => { },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          console.log('Ha ocurrido un error, intente nuevamente', 'Error');
        }
      }));
  }
}
