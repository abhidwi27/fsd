import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mentor on Demand System';
  static USERS_API_URL = 'http://localhost:8081/spa/users';
}
