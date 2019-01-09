import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IEmployee } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private dataUrl = 'http://localhost:3000/api/employees';
  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.dataUrl).pipe(
      map(employees => {
        console.log(employees);
        return employees;
      }),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof Error) {
      // console.log(error.error);
      const errMessage = error.error.message;
      return throwError(errMessage);
    }
    return throwError(error || 'Node.js server error');
  }
}
