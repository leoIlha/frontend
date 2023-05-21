import { FormsModule } from '@angular/forms';
import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LoginModule} from "./login/login.module";
import {PrincipalModule} from "./principal/principal.module";
import {ErrorHandlerService} from "./security/error-handler.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtinterceptorService} from "./security/jwtinterceptor.service";



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LoginModule,
    PrincipalModule,
    FormsModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: ErrorHandlerService},
    {provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
