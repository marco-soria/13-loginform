import { Component } from '@angular/core';

import { LoginComponent } from './auth/login/login';
import { SignupComponent } from './auth/signup/signup';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [LoginComponent, SignupComponent],
})
export class AppComponent {}
