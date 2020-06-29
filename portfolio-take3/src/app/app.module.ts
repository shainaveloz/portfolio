import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './views/list/list.component';
import { GameComponent } from './views/game/game.component';
import { CalculatorComponent } from './views/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    GameComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
