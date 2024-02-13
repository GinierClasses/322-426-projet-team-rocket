import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.scss'],
})
export class ProfilPageComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/login']);
  }
}
