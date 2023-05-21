import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[A-Za-z0-9._%+-]+@eduvaud\.ch$/),
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^Plagi@t!$/),
  ]);

  constructor(private router: Router) {}

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Vous devez insérez une adresse email';
    }

    if (this.email.hasError('pattern')) {
      return 'Votre adresse mail doit se terminer par @eduvaud.ch';
    }

    return '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Vous devez insérer un mot de passe';
    }

    if (this.password.hasError('pattern')) {
      return 'Le mot de passe doit être "Plagi@t!"';
    }

    return '';
  }

  login() {
    const fakeUserEmail = 'flavio.pacifico@eduvaud.ch';
    const enteredEmail = this.email.value;
    const enteredPassword = this.password.value;

    if (enteredEmail === fakeUserEmail && enteredPassword === 'Plagi@t!') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Email ou mot de passe incorrect');
    }
  }
}
