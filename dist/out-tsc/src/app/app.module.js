import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AuthserviceService } from './public/authservice.service';
import { httpInterceptorProviders } from './services/app-http/interceptors';
import { SpinnerComponent } from './spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeModule } from './home/home.module';
import { PublicModule } from './public/public.module';
import { routes } from './app-router';
import { MessageService } from 'primeng/api';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                HomeComponent,
                PageNotFoundComponent,
                SpinnerComponent,
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                RouterModule.forRoot(routes),
                FormsModule,
                NgbModule.forRoot(),
                ReactiveFormsModule,
                HttpClientModule,
                HomeModule,
                PublicModule,
                BsDropdownModule.forRoot(),
                BrowserAnimationsModule
            ],
            providers: [
                AuthserviceService,
                httpInterceptorProviders,
                MessageService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map