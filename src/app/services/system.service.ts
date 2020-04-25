import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { System } from '../models/system';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  url = 'http://localhost:8000/api/systems';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getSystems(): Observable<System[]> {
    return this.httpClient.get<System[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getSystemById(id: number): Observable<System> {
    return this.httpClient.get<System>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  saveSystem(system: System): Observable<System> {
    return this.httpClient.post<System>(this.url, JSON.stringify(system), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateSystem(system: System): Observable<System> {
    return this.httpClient.put<System>(this.url + '/' + system.id, JSON.stringify(system), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
