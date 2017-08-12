import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import {DashboardComponent} from './dashboard.component';
import {DokumenteComponent} from './dokumente.component';
import {EinstellungenComponent} from './einstellungen.component';
import {LoginComponent} from './login.component';
import {DokumenteAktuellesArbeitsjahrComponent} from './dokumente-aktuelles-arbeitsjahr.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dokumente', component: DokumenteComponent},
  { path: 'dokumente/aktuelles-arbeitsjahr', component: DokumenteAktuellesArbeitsjahrComponent },
  { path: 'einstellungen', component: EinstellungenComponent},
  { path: 'login', component: LoginComponent},
  /*{ path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },*/
  { path: '**', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    DokumenteComponent,
    EinstellungenComponent,
    LoginComponent,
    DokumenteAktuellesArbeitsjahrComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
