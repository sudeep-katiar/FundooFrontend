import { Component, OnInit, Input, Inject } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisplaynoteComponent } from '../displaynote/displaynote.component';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  @Input() noteData: any;
  notes: Note = new Note();
  note: any;

  constructor(public dialogRef: MatDialogRef<DisplaynoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data, public dialogref: MatDialogRef<DisplaynoteComponent>, private noteservice: NoteserviceService, private snackbar: MatSnackBar) {
      this.note = this.data.note;
     }

  ngOnInit() {
  }

  updateNote(title: string, content: string, id: number) {
    this.notes.title = title;
    this.notes.content = content;
    this.notes.id = id;
    this.noteservice.updateNote(this.notes, localStorage.getItem('token'), this.notes.id).subscribe((note) => {
      console.log(note);
      this.snackbar.open('Note updated successfully','OK', {duration: 3000});     
      },
      (error:any) => {
        console.log("error"+error);
        this.snackbar.open(error.error.description, 'error', {duration:3000});
      }
    );
  }

}
