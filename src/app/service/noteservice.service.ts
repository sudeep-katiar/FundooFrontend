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

  updateNote(Note: any, token: string, id: any): Observable<any> {
    console.log(id);
    return this.http.post<any>(this.noteURl + environment.updateNoteURL + token,Note,{headers: new HttpHeaders().set('id', id) });
  }


}
