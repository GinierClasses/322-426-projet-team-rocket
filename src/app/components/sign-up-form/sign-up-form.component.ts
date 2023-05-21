import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  classes = [
    { value: 'INFO2A', viewValue: 'INFO2A' },
    { value: 'INFO2B', viewValue: 'INFO2B' },
    { value: 'INFO2C', viewValue: 'INFO2C' },
    { value: 'INFO2D', viewValue: 'INFO2D' },
    { value: 'INFO2E', viewValue: 'INFO2E' },
  ];
}
