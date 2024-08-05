import {Component, inject, OnInit} from '@angular/core';
import {UsersApiService} from "../../services/api/users-api.service";
import {IUserData} from "../../types/users.types";
import {UsersService} from "../../services/users.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  usersData$ = inject(UsersService).users$;

  private readonly usersService = inject(UsersService);

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData(): void {
    this.usersService.getUsers().subscribe();
  }
}
