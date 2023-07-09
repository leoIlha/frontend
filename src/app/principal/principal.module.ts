import { LivrosModule } from './livros/livros.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {FuncionariosModule} from "./funcionarios/funcionarios.module";
import {HomeModule} from "../home/home.module";
import { LivrosComponent } from './livros/livros.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { ClienteComponent } from './cliente/cliente.component';






@NgModule({
  declarations: [
    PrincipalComponent,
    CarrinhoComponent,
    RelatoriosComponent,
    ClienteComponent,


  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    FuncionariosModule,
    LivrosModule,
    HomeModule,
    FormsModule,


  ]
})
export class PrincipalModule { }
