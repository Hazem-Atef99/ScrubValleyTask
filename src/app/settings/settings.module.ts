import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionPlansComponent } from './subscription-plans/subscription-plans.component';
import { UpgradeSubscriptionScreenComponent } from './upgrade-subscription-screen/upgrade-subscription-screen.component';


const routes: Routes=[
  {path:'',component:SubscriptionPlansComponent},
  {path:'Subscription',component:SubscriptionPlansComponent},
  {path:'upgrade',component:UpgradeSubscriptionScreenComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingsModule { }
