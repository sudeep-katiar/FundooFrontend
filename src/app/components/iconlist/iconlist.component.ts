import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { Router } from '@angular/router';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { AmazingTimePickerService } from 'amazing-time-picker';

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
  selectedTime: '18:33';
  isoo: any;
  today: string;
  noteService: any;
  snackBar: any;

  constructor(private router:Router,private dialog: MatDialog, private noteservice:NoteserviceService, private snackbar:MatSnackBar,private atp: AmazingTimePickerService) { }

  Token=localStorage.getItem('token')

  ngOnInit() {
  }

  getNoteId(items:any){
    this.notes.id=items.id;
  }

  open(noteID) {
    console.log("NoteID to set alram-----",noteID);
    const amazingTimePicker = this.atp.open({
      time: this.selectedTime,
      theme: 'dark',
      arrowStyle: {
        background: 'red',
        color: 'white'
      }
    });
    amazingTimePicker.afterClose().subscribe(time => {
      var str = this.selectedTime;
      let time1 = str.replace(":", ",")
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth()).padStart(2, '0');
      let yyyy = today.getFullYear();

      this.today = yyyy + ',' + mm + ',' + dd;
      let con = this.today.concat(',', time1, ',', '0');

      let timee = con.split(",");
      let op = new Date(parseInt(timee[0]), parseInt(timee[1]), parseInt(timee[2]), parseInt(timee[3]), parseInt(timee[4]), parseInt(timee[5]))
      let iso = op.toLocaleString();
      console.log("ISOOO Date--",iso);
   
      let dateTime={
        "id":noteID,
        "reminder":iso,
      }
      console.log("Date time to set reminder--->",dateTime);

      this.noteService.addReminder(dateTime,iso).subscribe(res => {
        console.log("Response after setting for date time ----------->", res);
        this.snackBar.open("reminder Added","OK",{duration:3000});
      })  
    });
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
        width: 'auto',
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