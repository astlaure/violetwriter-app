import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;

  constructor(private httpClient: HttpClient) {}

  load() {
    this.httpClient.get('/api/auth/profile')
      .toPromise()
      .then(() => this.isAuthenticated = true)
      .catch(() => this.isAuthenticated = false);
  }
}
