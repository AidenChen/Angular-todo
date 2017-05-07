import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdlModule } from '@angular-mdl/core';

import { CoreModule } from './services/core.module';
import { AppRoutingModule } from './app-routing.module';
import { TodoModule } from './pages/todo/todo.module';
import { LoginModule } from './pages/login/login.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdlModule,
    CoreModule,
    AppRoutingModule,
    LoginModule,
    TodoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
