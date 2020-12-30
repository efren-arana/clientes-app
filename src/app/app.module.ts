import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteService } from './cliente/cliente.service';
import { appRoutingProviders, routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    ClienteService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
