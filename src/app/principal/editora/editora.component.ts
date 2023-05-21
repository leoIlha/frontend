import { Component } from '@angular/core';
import {Autor} from "../../model/autor";
import {ClienteService} from "../cliente/cliente.service";
import {NgForm} from "@angular/forms";
import {Editora} from "../../model/editora";
import {EditoraService} from "./editora.service";

@Component({
  selector: 'app-devolucao',
  templateUrl: './editora.component.html',
  styleUrls: ['./editora.component.css']
})
export class EditoraComponent {
  editora: Editora = new Editora();

  editoras: Editora[] = [];

  constructor(private service: EditoraService) {
  }

  ngOnInit(): void {
    this.listar();
  }

  private listar(): void {
    this.service.listar().subscribe((dados) => {
      console.log(dados);
      this.editoras = dados;
    });

  }

  cadastrar(): void{
    this.listar();
  }

  filtrar(palavraChave: string) {
    if (palavraChave) {
      palavraChave = palavraChave.toUpperCase();

      this.editoras = this.editoras.filter(e =>
        e.nome.toUpperCase().indexOf(palavraChave) >= 0
      );
    }
  }

  saveSessao(form: NgForm){
    this.service.cadastrar(this.editora).subscribe(
      () => {
      }
    )
    this.listar();
    form.resetForm();
  }

  editSessao(editora: Editora){
    this.editora= { ...editora};
    console.log('nome:'+this.editora)
  }

  excluirSessao(id: number): void{
    console.log('id que será excluido:'+id)
    this.service.excluir(id).subscribe(()=>{this.listar()})

  }
}
