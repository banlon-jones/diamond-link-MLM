import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LandingComponent } from "./landing/landing.component";
export var PublicRoute = [
    { path: 'home', component: LandingComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'forgot_password', component: ForgotPasswordComponent },
    { path: 'signup/:registration_code', component: SignupComponent },
    { path: 'password/reset', component: ResetPasswordComponent },
];
//# sourceMappingURL=public-router.js.map