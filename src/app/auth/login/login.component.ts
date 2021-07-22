import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {}

  onSubmit() {
    this.httpClient.post('/api/auth/login', this.loginForm.value)
      .toPromise()
      .then(() => {
        this.authService.isAuthenticated = true;
        this.router.navigate(['/']);
      })
      .catch(() => {});
  }
}
