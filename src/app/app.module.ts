import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from '@angular-mdl/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './services/core.module';
import { TodoModule } from './pages/todo/todo.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    AppRoutingModule,
    CoreModule,
    TodoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
