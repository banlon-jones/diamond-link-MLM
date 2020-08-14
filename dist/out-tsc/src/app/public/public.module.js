import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from "./signup/signup.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from "./signin/signin.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { PublicRoute } from "./public-router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LandingComponent } from "./landing/landing.component";
import { RegCartTableComponent } from './signup/reg-cart-table/reg-cart-table.component';
import { RegCartTableRowComponent } from './signup/reg-cart-table-row/reg-cart-table-row.component';
var PublicModule = /** @class */ (function () {
    function PublicModule() {
    }
    PublicModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                SignupComponent,
                SigninComponent,
                ForgotPasswordComponent,
                ResetPasswordComponent,
                LandingComponent,
                RegCartTableComponent,
                RegCartTableRowComponent
            ],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                FormsModule,
                NgbModule.forRoot(),
                HttpClientModule,
                RouterModule.forRoot(PublicRoute),
                BrowserAnimationsModule,
                DialogModule,
                ProgressSpinnerModule,
                ToastModule,
                CarouselModule,
                ScrollPanelModule,
                ProgressBarModule
            ],
            exports: [
                SignupComponent,
                SigninComponent,
                ForgotPasswordComponent,
            ],
        })
    ], PublicModule);
    return PublicModule;
}());
export { PublicModule };
//# sourceMappingURL=public.module.js.map