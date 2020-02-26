import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  popup:boolean=false;
  constructor(private router:Router,private noteservice: NoteserviceService, private snackbar:MatSnackBar ) { }
  note:Note = new Note();
  Token=localStorage.getItem('token')
  
  ngOnInit() {
  }

  onSubmit() {
    if(this.note.title) {
      this.noteservice.addNote(this.note, this.Token).subscribe(notes=> {
        this.note = new Note();
        console.log(this.note);
        this.snackbar.open('Note Created', 'OK', {duration:3000});
      },
      (error: any) => {
        this.snackbar.open(error.error.description, 'error', {duration:3000});
      });
    }
  }

  onPopup() {
    this.popup=true;
  }

}
