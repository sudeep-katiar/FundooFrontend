import { Component, OnInit } from '@angular/core';
import { Label } from 'src/app/model/label.model';
import { LabelserviceService } from 'src/app/service/labelservice.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  labels:Label[];
  noteId:number;

  constructor(private labelService:LabelserviceService) { }

  ngOnInit() {
    // this.getAllUserLabel();
  }

  // getNoteId(){
  //   this.labelService.getlabelList().subscribe(
  //     message => {
  //       this.noteId = message.labels;
  //       console.log("ytytuiyuiyuiyuiyui",this.noteId);  
  //   });
  // }
  // getAllUserLabel(){
  //   this.labelService.getAllLabels().subscribe((response)=>{
  //     this.labels=response.data;
  //     console.log(this.labels);
  //   });
  // }
  // getAllNoteLabels() {
  //   this.labelService.getNoteLabels(this.noteId).subscribe((data)=>{
  //   });
    
  // }

}
