import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Note } from 'src/app/model/note.model';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pin-notes',
  templateUrl: './pin-notes.component.html',
  styleUrls: ['./pin-notes.component.scss']
})
export class PinNotesComponent implements OnInit {
  [x: string]: any;
  @Input() note: Note;
  isPinned: boolean;
  Token=localStorage.getItem('token');

  constructor(@Inject(MAT_DIALOG_DATA) public notes: Note, private noteService: NoteserviceService, private snackBar: MatSnackBarModule,
  public dialog: MatDialog, private sanitizer: DomSanitizer, private matSnackBar: MatSnackBar) { }

  ngOnInit() {
  }

  pinnedNote() {
    console.log(this.note.id);
    this.noteService.pinNotes(localStorage.token,this.note.id).subscribe(response => {
      if (this.note.pinned) {
        this.isPinned = false;
        this.matSnackBar.open("Note unPinned Successfully", 'Ok', { duration: 3000 });
        // this.dialogRef.close();
      }
      else if (!this.note.pinned) {
        this.isPinned = true;
        this.matSnackBar.open("Note Pinned Successfully", 'Ok', { duration:3000 });
        // this.dialogRef.close();
      }
      console.log(response);
      // this.dialogRef.close();
    },
      (error: any) => {
        console.log("error");
      });
  }
  
}
