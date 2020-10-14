import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http"
import { Observable } from 'rxjs';

export class SecondInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('second interceptor');
        console.log(req.url);
        return next.handle(req);
        //throw new Error('Method not implemented.');
    }

}