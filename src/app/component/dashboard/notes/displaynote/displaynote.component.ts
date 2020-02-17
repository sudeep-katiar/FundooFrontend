import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {

  notes:[];
  getAllNotes:[];

  constructor(private noteservice: NoteserviceService, public dialog:MatDialog) { }

  ngOnInit() {
    this.noteservice.getAllNotes(localStorage.getItem('token')).subscribe((response:any) =>
    {
      console.log(response);
      this.notes=response.data;
    })
  }
  openDialog(note:any)
  {
    console.log("open"+note.id);

    
  }

}
