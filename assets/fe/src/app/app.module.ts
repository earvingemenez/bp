import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UIRouterModule } from '@uirouter/angular';

import { TokenService } from './commons/services/users/interceptors/token.service';

import { GlobalsModule } from './components/globals/globals.module';
import { PublicModule } from './components/public/public.module';
import { UsersModule } from './components/users/users.module';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.route';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UIRouterModule.forRoot(APP_ROUTES),
    GlobalsModule,
    PublicModule,
    UsersModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
