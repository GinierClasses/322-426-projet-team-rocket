import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'GoodAfterNotes';

  constructor(public router: Router) {}
  ngOnInit() {
    const isLoggedIn = this.checkIfUserIsLoggedIn();

    if (!isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  private checkIfUserIsLoggedIn(): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    return isLoggedIn;
  }
}
