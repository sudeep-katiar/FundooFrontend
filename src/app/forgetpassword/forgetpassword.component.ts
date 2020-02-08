import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/userservice.service';
import { MatSnackBar} from '@angular/material/snack-bar';
import { NgForm, FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetpassword:FormGroup
  constructor(private userservice:UserServiceService,
    private router:Router,
    private snackbar:MatSnackBar){ }

  ngOnInit() {
    this.forgetpassword=new FormGroup({
      emailId:new FormControl()
    })

  }

  onSubmit(form: NgForm) {
    if (this.forgetpassword.invalid) {
        return;
   }
    console.log(this.forgetpassword.value);
   
     this.userservice.forgetpass(this.forgetpassword.value).subscribe( (user) => {
       console.log(user);
       this.snackbar.open('Reset Password link sent', 'Ok', {duration: 3000});
       
   },
   (error: any) => {
       console.log( error);
       this.snackbar.open(error.error.description, 'error', {duration: 3000});
   });
   }
  }