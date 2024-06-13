import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faEyeSlash, IconDefinition ,faEye} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  type:string="password";
  passwordVisible = false;
  faEyeSlash:IconDefinition=faEyeSlash;
  faEye:IconDefinition=faEye;
  exit!:boolean;
  message:string='';
  constructor(private AuthService:AuthService , private route:Router) {}
  onSubmit(form:NgForm) {
    console.log(this.AuthService.users);
    this.exit = this.AuthService.checkIfUserExist(form.value);
    console.log(this.exit);
    if (this.exit === true) {
      this.route.navigate(['../../user/findmine']);
    } else {
      this.message = "Email or Password is Wrong";
    }
  }



  showpassword() {
    if (this.type === "password") {
      this.type = "text";
      this.passwordVisible=!this.passwordVisible
    }else {
      this.type = "password";
      this.passwordVisible=!this.passwordVisible
    }
  }
}
