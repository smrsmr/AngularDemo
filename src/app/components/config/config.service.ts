import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  name: string;
	pass: string;
	privilege: number;
}
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
	// configUrl = 'assets/config.json';
	configUrl = 'http://127.0.0.1:3001/userControl/getUserInfo';
	constructor(private http: HttpClient) { }
	getConfig() {
    return this.http.get<Config>(this.configUrl)
      .pipe(
        retry(3), // 重试次数
        catchError(this.handleError) // then handle the error
      );
	}
	private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
