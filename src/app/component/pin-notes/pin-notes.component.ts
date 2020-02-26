import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/app/model/note.model';

@Component({
  selector: 'app-pin-notes',
  templateUrl: './pin-notes.component.html',
  styleUrls: ['./pin-notes.component.scss']
})
export class PinNotesComponent implements OnInit {
  @Input() note :Note;
  noteId;
  pinned: boolean;
  Token=localStorage.getItem('token');

  constructor(private matSnackBar: MatSnackBar, private router: Router, private noteService: NoteserviceService) { }

  ngOnInit() {
    console.log(this.note.is_pinned);
    this.pinned=this.note.is_pinned;
  }

  onPin() {
    console.log("on pin called");
    // this.noteService.share.subscribe(x => this.noteId = x);
    console.log("noteId---->:" + this.noteId);
    this.noteService.pinNotes(this.Token,this.note.id).subscribe(response => {
      if (this.pinned) {
        this.pinned=false;
        this.matSnackBar.open('note Pinned', 'ok', { duration: 3000 });
      }
      if (!this.pinned) {
        this.pinned=true;
        this.matSnackBar.open('note UnPinned', 'ok', { duration: 5000 });
      }
    },
      (error: any) => {
        console.log(error)
        this.matSnackBar.open('error in note pinned', 'ok', { duration: 3000 });
      }
    );
  }

}
