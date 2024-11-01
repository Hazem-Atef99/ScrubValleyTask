import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-subscription-data',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './subscription-data.component.html',
  styleUrl: './subscription-data.component.css'
})
export class SubscriptionDataComponent {
  click()
{
  console.log("route")
}}
