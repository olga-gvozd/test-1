import {Component, inject, OnInit} from '@angular/core';
import {IUserData} from "../../types/users.types";
import {UsersService} from "../../services/users.service";
import {AsyncPipe} from "@angular/common";
import {ButtonComponent} from "../buttons/button/button.component";
import {PrimeIcons} from "primeng/api";
import {FilterComponent} from "../filter/filter/filter.component";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {Observable} from "rxjs";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    AsyncPipe,
    ButtonComponent,
    FilterComponent,
    ButtonModule,
    RippleModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  usersData$: Observable<IUserData[]> = inject(UsersService).users$;

  private readonly usersService = inject(UsersService);
  protected readonly PrimeIcons = PrimeIcons;

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData(): void {
    this.usersService.getUsers().subscribe();
  }
}
