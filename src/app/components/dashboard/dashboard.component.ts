import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabelserviceService } from 'src/app/service/labelservice.service';
import { Label } from 'src/app/model/label.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  labels:Label[];
  constructor(private router:Router,private labelService:LabelserviceService) { }

  ngOnInit() {
    this.getAllLabelList();
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

}
