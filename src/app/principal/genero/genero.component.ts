import { Component } from '@angular/core';

import {ClienteService} from "../cliente/cliente.service";
import {NgForm} from "@angular/forms";
import {Genero} from "../../model/genero";
import {GeneroService} from "./genero.service";

@Component({
  selector: 'app-emprestimo',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent {
  genero: Genero = new Genero();

  generos: Genero[] = [];

  constructor(private service: GeneroService) {
  }

  ngOnInit(): void {
    this.listar();
  }

  private listar(): void {
    this.service.listar().subscribe((dados) => {
      console.log(dados);
      this.generos = dados;
    });

  }

  cadastrar(): void{
    this.listar();
  }

  filtrar(palavraChave: string) {
    if (palavraChave) {
      palavraChave = palavraChave.toUpperCase();

      this.generos = this.generos.filter(g =>
        g.nome.toUpperCase().indexOf(palavraChave) >= 0
      );
    }
  }

  saveSessao(form: NgForm){
    this.service.cadastrar(this.genero).subscribe(
      () => {
      }
    )
    this.listar();
    form.resetForm();
  }

  editSessao(genero: Genero){
    this.genero= { ...genero};
    console.log('nome:'+this.genero)
  }

  excluirSessao(id: number): void{
    console.log('id que será excluido:'+id)
    this.service.excluir(id).subscribe(()=>{this.listar()})

  }

}
