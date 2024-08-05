import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UsersApiService} from "./services/api/users-api.service";
import {Observable} from "rxjs";
import {IUserData} from "./types/users.types";
import {UsersComponent} from "./components/users/users.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-1';
}
