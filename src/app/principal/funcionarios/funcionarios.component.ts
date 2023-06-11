import { NgForm } from '@angular/forms';
import { Cliente } from './../../model/cliente';
import { Component, OnInit } from '@angular/core';
import {FuncionariosService} from "./funcionarios.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {catchError} from "rxjs";
import { NgFor } from '@angular/common';
import { Permissao } from 'src/app/model/permissao';
import {Funcionario} from "../../model/funcionario";
import {LoginService} from "../../login/login.service";


@Component({
  selector: 'app-cliente',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  //cliente: Cliente = new Cliente;

  funcionario:Funcionario= new Funcionario();

  funcionarios: Funcionario[] = [];

  ed:boolean = false;

   permissoes= [
     {
       nome: 'gerente'
     },
     {

       nome: 'funcionario'
    }
   ]


  cadastrado: boolean = false;

  constructor(private service: FuncionariosService, private login:LoginService) {
  }

  ngOnInit(): void {

    this.atualizar();
    //this.cliente.nome = 'serio';
    //console.log(this.cliente.nome)

  }

  private atualizar(): void {
    this.service.listar().subscribe((dados) => {
      this.funcionarios = dados;
    });
  }

  cadastrar() {

    console.log('botão clicado' + this.funcionario)

   /* if (this.cadastrado) {
      this.cadastrado = false;
    } else {
      this.cadastrado = true;
    }

    this.usuarios.push(this.usuario);
    this.service.cadastrar(this.usuario)
      .subscribe(() => {
      this.atualizar();
    })*/
  }

  saveFuncionario(form: NgForm){
    console.log('oi');
    console.log(this.funcionario.nome_funcionario)
    //this.clientes.push(this.cliente);
    this.service.cadastrar(this.funcionario).subscribe(
      () => {
        this.atualizar();
        form.resetForm();
      }
    )

  }

  editCliente(funcionario: Funcionario){
    this.funcionario= { ...funcionario};

  }

  excluirCliente(login: any): void{
  this.service.excluir(login).subscribe(()=>{this.atualizar()})
  }

  cleanForm(form: NgForm){
    //form.resetForm();
    this.funcionario = {} as Funcionario;
  }




}



