import { Component, OnInit, Input, Inject } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteserviceService } from 'src/app/service/noteservice.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  @Input() noteData: any;
  notes: Note = new Note();
  note: any;

  constructor(public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA)public data,public dialogref:MatDialogRef<UpdatenoteComponent>,private noteservice:NoteserviceService,private snackbar:MatSnackBar) { 
    this.note=this.data.note;
     }

  ngOnInit() {
    console.log(this.note);
  }

  updateNote(title: string, content: string, id: number) {
    
  this.notes.title = title;
    this.notes.content = content;
    this.notes.id =id;console.log("note");
    this.noteservice.updateNote(this.notes, localStorage.getItem('token'), this.notes.id).subscribe((notes) => {
      console.log(notes);
      this.snackbar.open('Note updated successfully','OK', {duration: 3000});     
      },
      (error:any) => {
        console.log("error"+error);
        this.snackbar.open(error.error.data, 'error', {duration:3000});
      }
    );
  }

}
