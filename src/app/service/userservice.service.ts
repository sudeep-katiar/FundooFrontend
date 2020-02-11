import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private API_URL = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  registration(user: any): Observable<any> {
    console.log(user);
    return this.http.post<any>(this.API_URL + environment.registerURL, user, this.httpOptions);
  }

  login(user: any): Observable<any> {
    console.log(user);
    return this.http.post<any>(this.API_URL + environment.loginURL, user, this.httpOptions);
  }

  forgetpass(user: any): Observable<any> {
    console.log(user);
    return this.http.post<any>(this.API_URL + environment.forgotPasswordURL, user,this.httpOptions);
  }

  resetpass(user: any, token: string): Observable<any> {
    console.log(user);
    return this.http.post<any>(this.API_URL + environment.resetPasswordURL + token, user);
  }
  
}
