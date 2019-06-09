import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private baseUrl = '/spa/users';

  constructor(private http: HttpClient) { }

  getUser(userId: number): Observable<Object> {
    return this.http.get(AppComponent.USERS_API_URL+'/'+'${userId}');
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(AppComponent.USERS_API_URL, user);
  }

  // createUser(user: Object): Observable<Object> {
  //   return this.http.post(`${this.baseUrl}`, user);
  // }

  // createUser(user: Object): Observable<Object> {
  //   return this.http.post(AppComponent.USERS_API_URL + '/spa/users', user);
  // }
  
  updateUser(userId: number, value: any): Observable<Object> {
    return this.http.put(AppComponent.USERS_API_URL+'/'+'${userId}', value);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(AppComponent.USERS_API_URL+'/'+'${userId}', { responseType: 'text' });
  }

  getUserList(): Observable<any> {
    return this.http.get(AppComponent.USERS_API_URL);
  }
}
