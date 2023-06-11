import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import {ClienteService} from "./cliente.service";
import {Cliente} from "../../model/cliente";

@Component({
  selector: 'app-sessao',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  cliente: Cliente = new Cliente();

  clientes: Cliente[] = [];

  constructor(private service: ClienteService) {
  }

  ngOnInit(): void {
    this.listar();
  }

  private listar(): void {
    this.service.listar().subscribe((dados) => {
      console.log(dados);
      this.clientes = dados;
      for (let cliente of this.clientes) {
        console.log(cliente);
        this.service.adicionarLivro(cliente);
      }
    });

  }

  cadastrar(): void{
    this.listar();
  }

  filtrar(palavraChave: string) {
    if (palavraChave) {
      palavraChave = palavraChave.toUpperCase();

      this.clientes = this.clientes.filter(a =>
        a.nome_cliente.toUpperCase().indexOf(palavraChave) >= 0
      );
    }
  }

  saveSessao(form: NgForm){
    this.service.cadastrar(this.cliente).subscribe(
      () => {
      }
    )
    this.listar();
    form.resetForm();
  }

  editSessao(cliente: Cliente){
   this.cliente= { ...cliente};
    console.log('nome:'+this.cliente)
  }

  excluirSessao(id_cli: any): void{
      console.log('id que será excluido:'+id_cli)
    this.service.excluir(id_cli).subscribe(()=>{this.listar()})

  }

}
