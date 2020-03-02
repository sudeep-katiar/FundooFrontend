import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

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
  
  constructor() { }
}
