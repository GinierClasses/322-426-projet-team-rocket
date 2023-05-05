import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Vous devez insérez une adresse email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Vous devez insérez un mot de passe';
    }

    return this.password.hasError('minlength')
      ? 'Votre mot de passe doit contenir au moins 8 caractères'
      : '';
  }
}
