import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from '@angular-mdl/core';
import { routing } from './app.routes';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './pages/todo/todo.data';

import { AuthService} from './services/auth.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TodoComponent } from './pages/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    routing,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService)
  ],
  providers: [
    {provide: 'auth', useClass: AuthService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
