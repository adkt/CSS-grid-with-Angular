import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CMyGridComponent } from './c-my-grid/c-my-grid.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CMyGridComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
