import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { SelectedListComponent } from './components/selected-list/selected-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    SelectedListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
