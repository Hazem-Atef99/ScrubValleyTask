import { Component } from '@angular/core';
import { ProfileComponent } from "../profile/profile.component";
import { SubscriptionDataComponent } from "../subscription-data/subscription-data.component";

@Component({
  selector: 'app-subscription-plans',
  standalone: true,
  imports: [ProfileComponent, SubscriptionDataComponent],
  templateUrl: './subscription-plans.component.html',
  styleUrl: './subscription-plans.component.css'
})
export class SubscriptionPlansComponent {

}
