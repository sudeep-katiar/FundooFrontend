import { Component, OnInit, Inject } from '@angular/core';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Note } from 'src/app/model/note.model';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  [x: string]: any;
  note: Note = new Note();
  Token = localStorage.getItem('token');
  popup: boolean = false;
  notes:Note[];
  getAllNotes: [];
  archivenotes: Note[];

  private dialogref: any;
  constructor(private noteservice: NoteserviceService, public dialog: MatDialog,public dialogRef: MatDialogRef<ArchiveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  ngOnInit() {
    this.noteservice.autoRefresh$.subscribe(() => {
      this.displayNotes();
    }); 
    this.displayNotes();
  }

  public displayNotes() {
    let getPinnedNotes = this.noteservice.getArchivedNotes(localStorage.getItem('token'));
    this.noteservice.getArchivedNotes(localStorage.getItem('token')).subscribe((response: any) => {
      console.log(response);
      this.notes = response.data;
    })
    this.noteservice.getArchivedNotes(localStorage.getItem('token')).subscribe(
      (data) => {
        console.log("Archived Notes"+data.data);
        this.archivenotes = data.data;
    });
  }

  closeClick(newNote: any) {
    console.log(this.note.title);
    console.log(this.note.content);
    this.updateNote(newNote);
  }
  onClickNoteId(id) {
    this.noteservice.pinNotes(this.Token,id);
  }
  
  openDialog(note: any) {
    console.log("open" + note.id);

    this.dialogref = this.dialog.open(UpdatenoteComponent, {
      panelClass: 'custom-dialog-container',
      width: '500px',
      data: { note }
    });
  }

  updateNote(newNote) {
    this.noteservice.updateNote(newNote, localStorage.getItem('token'), this.note.id).subscribe(response => {
      console.log(response.obj);
      // this.dialogRef.close();
    },
      error => {
        console.log("error");
      })
  }

  token(newNote: any, id: any, token: any) {
    throw new Error("Method not implemented.");
  }

  getAllPinNotes() {
    this.noteservice.getAllNotes(localStorage.getItem('token')).subscribe((response: any) => {
      console.log(response);
      this.notes = response.obj;
    });
  }

}
