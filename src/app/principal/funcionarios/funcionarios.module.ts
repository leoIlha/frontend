import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosComponent } from './funcionarios.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    FuncionariosComponent
  ],
  exports: [
    FuncionariosComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterOutlet
    ]
})
export class FuncionariosModule { }
