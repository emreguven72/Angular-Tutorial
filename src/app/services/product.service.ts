import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll = (): Observable<Product[]> => {
    const path: string = 'http://localhost:3000/products';
    return this.http.get<Product[]>(path).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError = (err: HttpErrorResponse) => {
    let errorMessage = ''
    if(err.error instanceof ErrorEvent) {
      errorMessage = `There is an event error: ${err.error.message}`;
    } else { //Bilgi: sistemsel hataysa demek
      errorMessage = 'System error';
    }
    return throwError(errorMessage);
  }
}
