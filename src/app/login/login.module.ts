import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        RouterOutlet,
        FormsModule,
    ]
})
export class LoginModule { }
