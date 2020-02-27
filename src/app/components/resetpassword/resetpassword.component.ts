import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { UserServiceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})

export class ResetpasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  token: string;

  constructor(
    private userService: UserServiceService,
    private router: Router,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      password: new FormControl(''),
      confirmpassword: new FormControl('')

    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.token = params.get('token');

      console.log(this.token);
    });
  }
  onSubmitReset(form: NgForm) {
    console.log(form);
    if (this.resetPasswordForm.invalid) {
      return;
    }
    console.log(this.token);

    this.token=this.route.snapshot.paramMap.get("token");
    this.userService.resetpass(this.resetPasswordForm.value, this.token).subscribe((user) => {
      console.log(user);
      this.snackbar.open('password changed', 'ok', { duration: 3000 });
      this.router.navigateByUrl('/login');
    },
      (error) => {
        console.log(error);
        this.snackbar.open(error.error.description, 'error', { duration: 3000 });
      });
  }
}