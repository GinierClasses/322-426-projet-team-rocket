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
    // One uppercase
    Validators.pattern(/(?=.*[A-Z])/),
    // One lowercase
    Validators.pattern(/(?=.*[a-z])/),
    // One number
    Validators.pattern(/(?=.*[0-9])/),
    // One special character
    Validators.pattern(/(?=.*[!@#$%^&*])/),
    // At least 8 characters
    Validators.pattern(/(?=.{8,})/),
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
      return 'Vous devez insérer un mot de passe';
    }

    const passwordValue = this.password.value ?? '';
    const errors = [];

    if (!/(?=.*[A-Z])/.test(passwordValue)) {
      errors.push('une majuscule');
    }

    if (!/(?=.*[a-z])/.test(passwordValue)) {
      errors.push('une minuscule');
    }

    if (!/(?=.*\d)/.test(passwordValue)) {
      errors.push('un chiffre');
    }

    if (!/(?=.*[!@#$%^&*])/i.test(passwordValue)) {
      errors.push('un caractère spécial');
    }

    if (!/(?=.{8,})/.test(passwordValue)) {
      errors.push('au moins 8 caractères');
    }

    if (errors.length > 0) {
      let errorMessage = 'Votre mot de passe doit contenir également ';
      if (errors.length === 1) {
        errorMessage += errors[0];
      } else if (errors.length === 2) {
        errorMessage += `${errors[0]} et ${errors[1]}`;
      } else {
        errorMessage += `${errors.slice(0, errors.length - 1).join(', ')} et ${
          errors[errors.length - 1]
        }`;
      }
      return errorMessage;
    }

    return '';
  }
}
