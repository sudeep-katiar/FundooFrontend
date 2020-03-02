import { Component, OnInit } from '@angular/core';
import { Label } from 'src/app/model/label.model';
import { LabelserviceService } from 'src/app/service/labelservice.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  labels:Label[];
  noteId:number;

  constructor(private labelService:LabelserviceService) { }

  ngOnInit() {
  }

  // getNoteId(){
  //   this.labelService.getlabelList().subscribe(
  //     message => {
  //       this.noteId = message.labels;
  //       console.log("ytytuiyuiyuiyuiyui",this.noteId);  
  //   });
  // }
  // getAllUserLabel(){
  //   this.labelService.getAllLabels().subscribe((data)=>{
  //     this.labels=data.list;
  //     console.log(this.labels);
  //   });
  // }
  // getAllNoteLabels() {
  //   this.labelService.getNoteLabels(this.noteId).subscribe((data)=>{
  //   });
    
  // }

}
