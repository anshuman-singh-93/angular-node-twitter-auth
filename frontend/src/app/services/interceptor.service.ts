import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";
import { tap } from "rxjs/operators";


@Injectable()
export class InterceptorService implements HttpInterceptor {

    constructor(private router:Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                'Authorization': `bearer ${localStorage.getItem('jwt')}`
            }
        });

        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    localStorage.removeItem('jwt')
                    this.router.navigate(['/login']);

                }

            }
        }))
    }
}