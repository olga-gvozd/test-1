import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private primengConfig: PrimeNGConfig = inject(PrimeNGConfig)

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
