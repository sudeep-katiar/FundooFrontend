import { Component, OnInit, Inject } from '@angular/core';
import { NoteserviceService } from 'src/app/service/noteservice.service';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  onenote: any;
  email: any;

  collarr: any;  
  
  
  
  email1 = new FormControl();
  message:string;
  ToData: any[];
  constructor(private noteService: NoteserviceService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.onenote = this.data;  //gets id from icon component
   
  }

  ngOnInit() {
    this.email = localStorage.getItem('emailUser');
   
  }
  
  writeEmail() {
    let addColl = {
      "noteId": this.onenote.noteId,
      "collaboratorId": this.email1.value
    }
    console.log("Add coll-->", addColl);
    this.noteService.addCollaborator(addColl).subscribe((res: any) => {
      console.log("Getting all collab users--->", res);

    })
  }

}
