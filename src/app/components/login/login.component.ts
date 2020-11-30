import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userId = '';
  password = '';
  isAuthenticated = true;
  isAuthorizated = false;
  message = '';

  constructor() {}

  ngOnInit(): void {}

  manageAuth() {
    if (this.userId === 'vincenzo' && this.password === '1234') {
      this.isAuthenticated = true;
      this.isAuthorizated = true;
      this.message = 'Correct Login';
    } else {
      this.isAuthenticated = false;
      this.isAuthorizated = false;
      this.message = 'Bad News. UserId or Password is incorrect';
    }
  }
}
