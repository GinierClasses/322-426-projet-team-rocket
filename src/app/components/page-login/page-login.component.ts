import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent {
  email = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[A-Za-z0-9._%+-]+@eduvaud\.ch$/),
  ]);
  password = new FormControl('', [
    Validators.required,
    // At least one uppercase letter ((?=.*[A-Z]))
    // At least one lowercase letter ((?=.*[a-z]))
    // At least one special character ((?=.*[!@#$%^&*()_+\-\=[\]{};':"\\|,.<>\/?]))
    // At least 8 characters long (.{8,})
    Validators.pattern(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[a-z]).{8,}$/
    ),
  ]);

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Vous devez insérez une adresse email';
    }

    if (this.email.hasError('pattern')) {
      return 'Vous devez insérez une adresse email qui se termine par @eduvaud.ch';
    }

    return '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Vous devez insérez un mot de passe';
    }

    if (this.password.hasError('pattern')) {
      return 'Votre mot de passe doit contenir au moins 8 caractères, une majuscule et un caractère spécial';
    }

    return '';
  }
}
