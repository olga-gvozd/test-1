import {Component, input, InputSignal} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {PrimeIcons} from "primeng/api";
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonModule, RippleModule ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  label: InputSignal<string> = input.required();
  icon: InputSignal<PrimeIcons | undefined> = input();
}
