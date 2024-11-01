import { Routes } from '@angular/router';

export const routes: Routes = [
  { path:'', loadChildren:() => import('./settings/settings.module').then((m)=>m.SettingsModule)}
];
