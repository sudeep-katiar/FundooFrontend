import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../model/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
  private noteURl=environment.notesApiUrl;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  constructor(private http:HttpClient) { }

  addNote(Note:any, token:string):Observable<any>{
    return this.http.post<any>(this.noteURl + environment.createNoteURL + token,Note);
  }

  getAllNotes(token:string):Observable<any> {
    return this.http.post<any>(this.noteURl + environment.displayNoteURL + token,Note);
  }

  deleteNote(token:string,id:any):Observable<any>{
    return this.http.delete<any>(this.noteURl+"notes/delete/"+id,{headers: new HttpHeaders().set('token',  token) })
  }

  updateNote(Note: any, token: string, id: any): Observable<any> {
    console.log(id);
    return this.http.post<any>(this.noteURl + environment.updateNoteURL + token,{headers: new HttpHeaders().set('id', id) }, Note)
  }

  getTrashedNotes(token:string):Observable<any>{
    return this.http.get<any>(this.noteURl+"trashednotes",{headers: new HttpHeaders().set('token',  token) })
  }

  getArchivedNotes(token:string):Observable<any>{
    return this.http.get<any>(this.noteURl+"archievednotes",{headers: new HttpHeaders().set('token',  token) })
  }

  pinNotes(token:string,id:any):Observable<any>{

    return this.http.post<any>(this.noteURl+"notes/pinned/"+id,{headers: new HttpHeaders().set('token',  token) })
     
  }
  unPinNotes(token:string,id:any):Observable<any>{

    return this.http.post<any>(this.noteURl+"notes/unpinned/"+id,{headers: new HttpHeaders().set('token',  token) })
  }

  archieveNote(token:string,id:any):Observable<any>{
    return this.http.post<any>(this.noteURl+"notes/archieve/"+id,{headers: new HttpHeaders().set('token',  token) })
  }

  unarchieveNote(token:string,id:any):Observable<any>{
    return this.http.post<any>(this.noteURl+"notes/unarchieve/"+id,{headers: new HttpHeaders().set('token',  token) })
  }

  trashnote(token:string,id:any):Observable<any>{
    return this.http.post<any>(this.noteURl+"notes/trashed/"+id,{headers: new HttpHeaders().set('token',  token) })
  }

  restoreNote(token:string,id:any):Observable<any>{
    return this.http.post<any>(this.noteURl+"notes/restore/"+id,{headers: new HttpHeaders().set('token',  token) })
  }


}
