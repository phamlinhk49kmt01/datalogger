import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {
    UserName: null,
    Password: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private router:Router, private userService: UserService) {   }

  
  ngOnInit(): void {
   console.log('login');
  }

  onSubmit(){
      this.userService.login(this.form).subscribe(response=>{
        if(response.data){
          localStorage.setItem("token",response.data.access_token);
          localStorage.setItem("refresh_token",response.data.refresh_token);
          localStorage.setItem("user",JSON.stringify(response.data.account_info));  
          this.router.navigate(["/"]);
        }
        else {
          this.errorMessage = response.message;
        }
      },
      error=>{

        console.log(error); 
      });
      // localStorage.setItem("token","xxx");
      // this.router.navigate([""]);
  }

}
