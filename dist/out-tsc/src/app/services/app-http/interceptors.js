import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../auth-interceptor.service';
export var httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
];
//# sourceMappingURL=interceptors.js.map