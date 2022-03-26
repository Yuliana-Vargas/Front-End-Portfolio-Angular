import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroduccionComponent } from './components/introduccion/introduccion.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { FormacionComponent } from './components/formacion/formacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroduccionComponent,
    AcercaDeComponent,
    FormacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
