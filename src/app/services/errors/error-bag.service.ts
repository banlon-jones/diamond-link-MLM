import { Injectable } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {isUndefined} from "util";
interface ErrorField {
  fieldName: string;
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class ErrorBagService {
  errors: Array<ErrorField>;
  constructor() { }
  hasError(fieldName: string): boolean {
    if (this.errors.length === 0) {
      return false;
    }
    for (const error of this.errors) {
      if (error.fieldName === fieldName) {
        return true;
      }
    }
  }
  getError(fieldName: string): string {
    for (const error of this.errors) {
      if (error.fieldName === fieldName) {
        return error.message;
      }
    }
    return null;
  }
  setErrors(errors: Array<ErrorField>): boolean {
    this.errors = errors;
    return true;
  }
  getHttpError(httpErrors: HttpErrorResponse): string {
    let message = httpErrors.error.message;
    if (message === undefined) {
      message = 'Can\'t connect to Server';
    } else if (message === null) {
      message = 'Invalid Username or Password please try again. Thanks!';
    } else if (message.includes('MethodArgumentNotValidException')) {
      message = 'Invalid inputs';
    }
    return message;
  }
}
