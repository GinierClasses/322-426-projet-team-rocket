import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  name = new FormControl('', [Validators.required]);
  firstname = new FormControl('', [Validators.required]);
  birthdate = new FormControl('', [Validators.required]);
  classes = [
    { value: 'INFO2A', viewValue: 'INFO2A' },
    { value: 'INFO2B', viewValue: 'INFO2B' },
    { value: 'INFO2C', viewValue: 'INFO2C' },
    { value: 'INFO2D', viewValue: 'INFO2D' },
    { value: 'INFO2E', viewValue: 'INFO2E' },
  ];
  selectedClass = new FormControl('', [Validators.required]);
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

  getNameErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Vous devez insérer un nom';
    }
    return '';
  }

  getFirstnameErrorMessage() {
    if (this.firstname.hasError('required')) {
      return 'Vous devez insérer un prénom';
    }
    return '';
  }

  getBirthdateErrorMessage() {
    if (this.birthdate.hasError('required')) {
      return 'Vous devez insérer une date de naissance';
    }
    return '';
  }

  getClassErrorMessage() {
    if (this.selectedClass.hasError('required')) {
      return 'Vous devez sélectionner une classe';
    }
    return '';
  }

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
