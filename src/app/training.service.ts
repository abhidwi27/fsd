import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable , of } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  public data: Observable<any[]>;
  private _url: string = '../assets/data/training.json';

  constructor(private http: HttpClient) { }

  getTraingDetails(): Observable<any>{
    this.data =  this.http.get<any[]>(this._url);
    console.log("Data in service is " + this.data );    
    return this.http.get<any[]>(this._url)
      .pipe(
        tap(noticeToWorkData => {          
          console.log("Training Data Fetched");          
        }),
        catchError(this.handleError('getNoticeToWorkData', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}



