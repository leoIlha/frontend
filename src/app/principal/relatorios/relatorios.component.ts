import { Component } from '@angular/core';
import {RelatoriosService} from "./relatorios.service";
import {Funcionario} from "../../model/funcionario";
import {Cliente} from "../../model/cliente";
import {Livro} from "../../model/livro";

@Component({
  selector: 'app-emprestimo',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent {


  constructor(private service: RelatoriosService) {
  }


  cliente:Cliente[]=[];
  livros:Livro[]=[];
  livrosfalta:Livro[]=[];
  funcionariomais:Funcionario[]=[];
  funcionariomenos:Funcionario[]=[];

  ngOnInit(): void {
    this.listarlivromaisvendido()
    this.livrosemfalta()
    this.listarfuncionariomaisvendeu()
    this.listarfuncionariomenosvendeu()
    this.listarclientemais()
  }


  private listarlivromaisvendido():void {
    this.service.listarlivromaisvendido().subscribe((dados) => {
      console.log("dados"+dados);
      this.livros = dados;
      for (let livro of this.livros) {
        console.log("livro mais vendido:"+livro.nome_livro);
        console.log("livro mais vendido:"+livro.totaldevendas);
       // this.service.adicionarCliente(cliente);
      }
    })

  }
  private livrosemfalta():void {
    this.service.listarlivrosemfalta().subscribe((dados) => {
      console.log("dados"+dados);
      this.livrosfalta = dados;
      for (let livro of this.livrosfalta) {
        console.log("livro sem estoque:"+livro.nome_livro);
        console.log("livro sem estoque:"+livro.estoque_liv);
        // this.service.adicionarCliente(cliente);
      }
    })
  }

  private listarfuncionariomaisvendeu():void {
    this.service.listarfuncionariomais().subscribe((dados) => {
      console.log("dados"+dados);
      this.funcionariomais = dados;
      for (let funcionario of this.funcionariomais) {
        console.log("funcionario que mais vendeu:"+funcionario.nome_funcionario);
        console.log("funcionario que mais vendeu:"+funcionario.totalvendas);
        // this.service.adicionarCliente(cliente);
      }
    })

  }
  private listarfuncionariomenosvendeu():void {
    this.service.listarfuncionariomenos().subscribe((dados) => {
      console.log("dados"+dados);
      this.funcionariomenos = dados;
      for (let funcionario of this.funcionariomenos) {
        console.log("funcionario que menos vendeu:"+funcionario.nome_funcionario);
        console.log("funcionario que menos vendeu:"+funcionario.totalvendas);
        // this.service.adicionarCliente(cliente);
      }
    })
  }

  private listarclientemais():void {
    this.service.listarcliente().subscribe((dados) => {
      console.log("dados"+dados);
      this.cliente = dados;
      for (let client of this.cliente) {
        console.log("cliente que mais comprou :"+client.nome_cliente);
        console.log("cliente que mais comprou:"+client.totaldecompras);
        // this.service.adicionarCliente(cliente);
      }
    })
  }

}
