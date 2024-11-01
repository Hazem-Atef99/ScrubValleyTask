import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./settings/profile/profile.component";
import { SubscriptionPlansComponent } from "./settings/subscription-plans/subscription-plans.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, SubscriptionPlansComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ScrubValleyTask';
}
