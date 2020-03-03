import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpserviceService } from './httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class LabelserviceService {
  [x: string]: any;
  private labelURl=environment.labelApiUrl;
  private _autoRefresh$ = new Subject();
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  get autoRefresh$() {
    return this._autoRefresh$;
  }

  private labelsList = new Subject<any>();
  
  constructor(private http:HttpClient) { }

  setlabelList(message:any){

    this.labelsList.next({labels:message});
}

getNoteLabels(noteId:any){
  return this.http.get(`${environment.labelApiUrl}/${environment.getLabels}?noteId=${noteId}`,{headers: new HttpHeaders().set('token',  localStorage.token) });
}

getAllLabels(){
  return this.http.get(`${environment.labelApiUrl}/${environment.getLabelsList}`, { headers: new HttpHeaders().set('token', sessionStorage.token)});
}

}
