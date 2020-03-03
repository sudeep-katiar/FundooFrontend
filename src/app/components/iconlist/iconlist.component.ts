import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { Router } from '@angular/router';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CollaboratorComponent } from '../collaborator/collaborator.component';

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
  notesicon: any;
  noteId: number;
  labelService: any;

  constructor(private router:Router,private dialog: MatDialog, private noteservice:NoteserviceService, private snackbar:MatSnackBar) { }

  Token=localStorage.getItem('token')

  ngOnInit() {
  }

  getNoteId(items:any){
    this.notes.id=items.id;
  }

  delete(){
    this.noteservice.deleteNote(this.note.id).subscribe((note) =>
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
      this.snackbar.open("Note Archived", "OK", { duration: 3000 });
    },
    (error: any) => {
        this.snackbar.open("rror.error.description", "OK", { duration: 3000 });
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
  
  collabrator(): void {
      console.log("Note id in colab111111--->", this.note.id);
  
  
      const dialogRef = this.dialog.open(CollaboratorComponent, {
        width: '490px',
        height: '290px',
        data: { noteId: this.note.id }
      });

  }

  onClickDelete() {
    this.noteId=this.note.id;
    this.noteservice.deleteNote(this.note.id).subscribe((response) => {
      this.snackbar.open("Note trashed", 'ok', { duration: 5000 });
    },
      error => {
        this.snackbar.open("error in Note Deletion", 'ok', { duration: 5000 });

      }

    );
  }

  onclicksetNoteid(noteId:any){
    console.log("note id "+noteId);
      // this.labelService.setlabelList(noteId);
  }

  setColor( color) {
    console.log("Color---->", color,this.note.id);
    
    this.noteservice.addColor(this.note.id,color).subscribe(res => {

      console.log("Resssponse backk---->");

      console.log("Response after setting note color-------->", res);
    })
  }

  arrayOfColors = [
    [
      { color: "rgb(255, 179, 255)", name: "pink" },
      { color: "rgb(255, 255, 128)", name: "darkGolden" },
      { color: "white", name: "white" }
    ],
    [
      { color: "slategray", name: "grey" },
      { color: "rgb(153, 221, 255)", name: "light blue" },
      { color: "rgb(200, 232, 104)", name: "yellow" }
    ],
    [
      { color: "rgb(255, 153, 0)", name: "orange" },
      { color: "rgb(97, 191, 82)", name: "green" },
      { color: " rgb(158, 136, 191)", name: "darkYellow" }
    ]
  ]
}