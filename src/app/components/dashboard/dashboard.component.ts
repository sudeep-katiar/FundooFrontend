import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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

}
