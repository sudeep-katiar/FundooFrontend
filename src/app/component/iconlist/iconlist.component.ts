import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { Router } from '@angular/router';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-iconlist',
  templateUrl: './iconlist.component.html',
  styleUrls: ['./iconlist.component.scss']
})
export class IconlistComponent implements OnInit {
  @Input() noteData:any;
   notes:Note = new Note();
   note:any;
  error: any;

  constructor(private router:Router, private noteservice:NoteserviceService, private snackbar:MatSnackBar) { }

  Token=localStorage.getItem('token')

  ngOnInit() {
  }

}
