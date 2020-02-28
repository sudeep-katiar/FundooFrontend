import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { Router } from '@angular/router';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-iconlist',
  templateUrl: './iconlist.component.html',
  styleUrls: ['./iconlist.component.scss']
})
export class IconlistComponent implements OnInit {
  // @Input() noteData:any;
   notes:Note = new Note();
   @Input() note:Note;
  error: any;

  constructor(private router:Router, private noteservice:NoteserviceService, private snackbar:MatSnackBar) { }

  Token=localStorage.getItem('token')

  ngOnInit() {
  }

  getNoteId(items:any){
    this.notes.id=items.id;
  }

  delete(){
    this.noteservice.deleteNote(this.Token,this.note.id).subscribe((note) =>
    {
      this.snackbar.open('Note deleted successfully', 'Ok', { duration: 3000 });
         
    },
    (error: any) => {
      console.log("hello"+error);
      this.snackbar.open(error.error.description, 'error', { duration: 3000 });
    });

  }

  restore(){
    this.noteservice.restoreNote(this.Token,this.note.id).subscribe((note) =>
    {
      this.snackbar.open('Note restored successfully', 'OK', {duration: 3000});
    },
    (error:any) => {
      console.log("error "+error);
      this.snackbar.open(error.error.description, 'error', {duration: 3000});
    });
  }

  pin(){
    this.noteservice.pinNotes(this.Token,this.note.id).subscribe((note) =>
    {
      this.snackbar.open('Note pinned successfully', 'Ok', { duration: 3000 });
         
    },
    (error: any) => {
      console.log("hello"+error);
      this.snackbar.open(error.error.description, 'error', { duration: 3000 });
    });

  }

  unPinned(){
    this.noteservice.unPinNotes(this.Token,this.note.id).subscribe((note) =>
    {

      this.snackbar.open('Note unpinned successfully', 'Ok', { duration: 3000 });
         
    },
    (error: any) => {
      this.snackbar.open(error.error.description, 'error', { duration: 3000 });
    });

  }

  onClickArchive() {
    console.log("id: "+this.note.id);
    this.noteservice.moveToArchiveNote(this.note.id).subscribe((response) => {
      this.snackbar.open("Note unpinned and Archived", "OK", { duration: 3000 });
    },
    (error: any) => {
        this.snackbar.open("rror.error.description", "OK", { duration: 3000 });
    });
  }

  archieve(){
    this.noteservice.archieveNote(this.Token,this.note.id).subscribe((note) =>
    {

      this.snackbar.open('Note archieved successfully', 'Ok', { duration: 3000 });
         
    },
    (error: any) => {
      this.snackbar.open(error.error.description, 'error', { duration: 3000 });
    });

  }


  unarchieve(){
    this.noteservice.unarchieveNote(this.Token,this.note.id).subscribe((note) =>
    {

      this.snackbar.open('Note unarchieved successfully', 'Ok', { duration: 3000 });
         
    },
    (error: any) => {
      this.snackbar.open(error.error.description, 'error', { duration: 3000 });
    });

  }


  emptybin(){
    this.noteservice.emptyBin(this.Token,this.note.id).subscribe((note) =>
    {

      this.snackbar.open('Note trashed successfully', 'Ok', { duration: 3000 });
         
    },
    (error: any) => {
      this.snackbar.open(error.error.description, 'error', { duration: 3000 });
    });

  }

  remainder(){

  }

  collabrator(){

  }

  addImages(){

  }

  changeColor(){

  }

  

}
