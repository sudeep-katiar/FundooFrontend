import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabelserviceService } from 'src/app/service/labelservice.service';
import { Label } from 'src/app/model/label.model';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  labels:Label[];
  dialogref: any;
  dialog: any;
  constructor(private router:Router,private labelService:LabelserviceService) { }

  ngOnInit() {
    this.getAllLabelList();
  }

  refresh() {
    console.log("reloading page");
    window.location.reload();
  }

  notes() {
    console.log("notessssssssssssss");
    this.router.navigate(['/dashboard/notes']);
  }

  reminder() {
    console.log("remindersssssssssssss");
    this.router.navigate(['/dashboard/reminder']);
  }

  label() {
    console.log("labelsssssssssssss");
    this.router.navigate(['/dashboard/label']);
  }

  archive() {
    console.log("archivessssssssssss");
    this.router.navigate(['/dashboard/archive']);
  }

  trash() {
    console.log("trashssssssssssssss");
    this.router.navigate(['/dashboard/trash']);
  }
  getAllLabelList(){
    this.labelService.getAllLabels().subscribe((response:any)=>{
        console.log(response.data);
        this.labels=response.data;
    });
  }

  public dailogLabel(name:string) {
    // const data = this.note;
    // console.log("note value",this.note);
    const dialogRef = this.dialog.open(LabelComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
