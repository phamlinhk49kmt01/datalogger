import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private router:Router) {   }

  
  ngOnInit(): void {
   
  }

  onSubmit(){
      console.log(this.form);
      localStorage.setItem("token","xxx");
      this.router.navigate([""]);
  }

}
