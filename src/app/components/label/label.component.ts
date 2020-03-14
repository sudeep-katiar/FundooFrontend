import { Component, OnInit, Input, Inject } from '@angular/core';
import { Label } from 'src/app/model/label.model';
import { LabelserviceService } from 'src/app/service/labelservice.service';
import { Note } from 'src/app/model/note.model';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { NoteserviceService } from 'src/app/service/noteservice.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  labels:Label[];
  noteId:number;
  public notes: Note[] = [];
  public newNotes: Note[] = [];
  @Input() noteData: any;
  note: Note = new Note();
  subscription: any;
  label: Label = new Label();

  constructor(private noteService: NoteserviceService, private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    public dialog: MatDialog, private labelService: LabelserviceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit() {
    this.getNotes();
    this.getAllListLabels();
  }

  public getNotes() {
    this.noteService.getAllNotes(localStorage.getItem('token')).subscribe(newNote => {
      this.notes = newNote;
      console.log("Notes Are ", this.notes);
    }, error => {
      this.snackBar.open("error", "error to retrieve notes", { duration: 2000 });
    }
    );
  }
  setLabels(message: Label[]) {
    console.log("List Of Lables", message)
    this.labelService.getLabels();
  }
  getAllListLabels() {
     this.labelService.getAllLabels().subscribe(
      (res) => { 
        this.labels = res.data;
        console.log("Label", res.data);

        if (this.labels != undefined) {
          this.setLabels(this.labels);
        }
        console.log("Display Labels Are :", this.labels);
      },
      (error: any) => {
        console.log(error)
        this.snackBar.open('error in note display', 'ok', { duration: 3000 });
      }
    );
  }
  createLabel(title) {
    let lab={
      "labelTitle":title
    }
    console.log(this.labels, "Display Labels");
    this.labelService.createLabel(lab).subscribe(resp => {
      this.snackBar.open("Label Is Created ", "ok", { duration: 2000 })
    });
    error => {
      this.snackBar.open("Label Is Not Created", "error", { duration: 2000 });
    }
  }
}