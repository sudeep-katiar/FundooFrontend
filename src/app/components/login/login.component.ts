import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { NgForm, FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
     this.userservice.login(this.loginForm.value).subscribe( response => {

      console.log("token......"+response.message);
       localStorage.setItem("token",response.message);
       this.router.navigateByUrl("dashboard")
       resp =response;
       console.log("user response __________________",resp.data.email);
       
       this.snackbar.open('Login Successfully Done', 'Ok', {duration: 3000});

   },
   (error: any) => {
       this.snackbar.open(error.description, 'error', {duration: 3000});
   });
   }
  
}