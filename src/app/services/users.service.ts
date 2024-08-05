import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {IUserData} from "../types/users.types";
import {UsersApiService} from "./api/users-api.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users$: Observable<IUserData[]>;

  private readonly usersSubject$: BehaviorSubject<IUserData[]> = new BehaviorSubject<IUserData[]>([]);
  private readonly userApiService = inject(UsersApiService);

 constructor() {
   this.users$ = this.usersSubject$.asObservable();
 }

  getUsers(): Observable<IUserData[]> {
    return this.userApiService.getUsers()
      .pipe(
        tap((users: IUserData[]) => this.usersSubject$.next(users)),
      );
  }
}
