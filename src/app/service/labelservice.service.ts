import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpserviceService } from './httpservice.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LabelserviceService {
  [x: string]: any;
  private labelURl=environment.labelApiUrl;
  private _autoRefresh$ = new Subject();
  private subject = new Subject<any>();
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  get autoRefresh$() {
    return this._autoRefresh$;
  }

  private labelsList = new Subject<any>();
  
  constructor(private router: Router, private http:HttpClient) { }

  getLabels(): Observable<any> {
    return this.subject.asObservable();
  }

  setlabelList(message:any){

    this.labelsList.next({labels:message});
}

getNoteLabels(noteId:any){
  return this.http.get(`${environment.labelApiUrl}/${environment.getLabels}?noteId=${noteId}`,{headers: new HttpHeaders().set('token',  localStorage.token) });
}

getAllLabels():Observable<any>{
  return this.http.get(`${environment.labelApiUrl}${environment.getLabelsList}`, { headers: new HttpHeaders().set('token', localStorage.token)});
}

createLabel(name: any){
  return this.http.post<any>(`${environment.labelApiUrl}${environment.createLabelUrl}`, name, { headers: new HttpHeaders().set('token', localStorage.token) });
}

}
