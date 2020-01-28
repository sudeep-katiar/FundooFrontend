import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/userservice.service';
import { MatSnackBar} from '@angular/material/snack-bar';
import { NgForm, FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private userservice:UserServiceService,
    private router:Router,
    private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.loginForm=new FormGroup({
      email:new FormControl(),
      password:new FormControl()
    })
  }

  onSubmit(form: NgForm) {
    if (this.loginForm.invalid) {
        return;
    }
    let resp
     this.userservice.login(this.loginForm.value).subscribe( (user) => {
       //console.log(user.message.data.email);
       localStorage.setItem("token",user.response)
       console.log(user.response);
      resp =user
       console.log("user response __________________",resp.data.email);
       
       //this.snackbar.open('Login Successfully Done', 'Ok', {duration: 3000});

   },
   (error: any) => {
       this.snackbar.open(error.description, 'error', {duration: 3000});
   });
   }
  
}