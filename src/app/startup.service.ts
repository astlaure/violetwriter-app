import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(private authService: AuthService) { }

  init() {
    return this.authService.load();
  }
}
