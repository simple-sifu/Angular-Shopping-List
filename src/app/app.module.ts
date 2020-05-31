import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { TodoComponent } from './todo/todo.component';
import { ManagerComponent } from './manager/manager.component';

@NgModule({
  declarations: [
    AppComponent,
    InputButtonComponent,
    TodoComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }