import { DbzModule } from './dbz/dbz.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { HerosModule } from './heros/heros.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HerosModule,
    DbzModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
