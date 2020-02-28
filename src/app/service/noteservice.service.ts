import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Note } from '../model/note.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
  [x: string]: any;
  private noteURl=environment.notesApiUrl;
  private _autoRefresh$ = new Subject();
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  get autoRefresh$() {
    return this._autoRefresh$;
  }

  constructor(private http:HttpClient) { }

  addNote(Note:any, token:string):Observable<any> {
    return this.http.post<any>(this.noteURl + environment.createNoteURL,Note,{headers: new HttpHeaders().set('token', token) }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
  }

  getAllNotes(token:string):Observable<any> {
    return this.http.post<any>(this.noteURl + environment.allNoteURL,Note,{headers: new HttpHeaders().set('token', token) });
  }

  updateNote(Note: any, token: string, id: any): Observable<any> {
    console.log(id);
    return this.http.post<any>(this.noteURl + environment.updateNoteURL + id,Note,{headers: new HttpHeaders().set('token', token) }).pipe(tap(() => {
      this._autoRefresh$.next();
    }));
  }

  deleteNote(token:string,id:any):Observable<any>{
    return this.http.post<any>(this.noteURl + environment.deleteNoteURL + id,{headers: new HttpHeaders().set('token',  token) })
  }

  restoreNote(token:string,id:any):Observable<any>{
    return this.http.post<any>(this.noteURl + environment.restoreNoteURL + id,{headers: new HttpHeaders().set('token',  token) })
  }

  pinNotes(token:string,id:any):Observable<any>{

    return this.http.post<any>(`${this.noteURl}${environment.pinNoteURL}?id=${id}`,{},{headers: new HttpHeaders().set('token',  localStorage.token) })  .pipe(tap(() => {
      this._autoRefresh$.next();
    }));
  }

  getPinnedNotes(token:string) {
    return this.http.get<any>(this.noteURl + environment.allPinnedNoteURL,{headers: new HttpHeaders().set('token',  token) });
  }

  getUnpinnedNotes(token:string) {
    return this.http.get<any>(this.noteURl + environment.allUnpinnedNoteURL,{headers: new HttpHeaders().set('token',  token) });
  }

  moveToArchiveNote(id: any) {
    return this.http.post<any>(`${this.noteURl}${environment.archiveNoteURL}/${id}`, {}, { headers: new HttpHeaders().set('token', localStorage.token) });
  }

  archieveNote(token:string,id:any):Observable<any>{
    return this.http.post<any>(this.noteURl + environment.archiveNoteURL + id,{headers: new HttpHeaders().set('token',  token) })
  }

  unarchieveNote(token:string,id:any):Observable<any>{
    return this.http.post<any>(this.noteURl + environment.archiveNoteURL + id,{headers: new HttpHeaders().set('token',  token) })
  }

  emptyBin(token:string,id:any):Observable<any>{
    return this.http.post<any>(this.noteURl + environment.emptyBinURL + id,{headers: new HttpHeaders().set('token',  token) })
  }

}
