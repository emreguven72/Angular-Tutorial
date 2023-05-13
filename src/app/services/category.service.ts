import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Category } from '../category/category';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getAll = (): Observable<Category[]> => {
    const path: string = 'http://localhost:3000/categories';
    return this.http.get<Category[]>(path).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError = (err: HttpErrorResponse) => {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      errorMessage = `There is an event error: ${err.error.message}`;
    } else {
      errorMessage = 'There is a system error';
    }
    return throwError(errorMessage);
  }
}
