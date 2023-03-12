import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {AuthComponent} from './auth/auth.component';
import {GameComponent} from './game/game.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainPageComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'game', component: GameComponent},
  {path: 'management', loadChildren: () => import('./management/management.module').then(m => m.ManagementModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
