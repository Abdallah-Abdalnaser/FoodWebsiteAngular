import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faEye, faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Route, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']  // Corrected from 'styleUrl' to 'styleUrls'
})
export class RegisterComponent {
  type1: string = "password";
  type2: string = "password";
  passwordVisible = false;
  conpasswordVisible = false;
  faEyeSlash: IconDefinition = faEyeSlash;
  faEye: IconDefinition = faEye;

  constructor(private AuthService: AuthService ,  private route:Router ) {}

  onSubmit(form: NgForm) {
    this.AuthService.addUser(form.value);
    this.route.navigate(['auth/login']);
  }

  showpassword() {
    if (this.type1 === "password") {
      this.type1 = "text";
      this.passwordVisible = !this.passwordVisible;
    } else {
      this.type1 = "password";
      this.passwordVisible = !this.passwordVisible;
    }
  }

  showConfirmPassword() {
    if (this.type2 === "password") {
      this.type2 = "text";
      this.conpasswordVisible = !this.conpasswordVisible;
    } else {
      this.type2 = "password";
      this.conpasswordVisible = !this.conpasswordVisible;
    }
  }
}
