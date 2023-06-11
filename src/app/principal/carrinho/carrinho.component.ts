// import { Component } from '@angular/core';
// import { Venda } from "../../model/Venda";
// import { ClienteService } from "../cliente/cliente.service";
// import { NgForm } from "@angular/forms";
// import { Editora } from "../../model/editora";
// import { CarrinhoService } from "./carrinho.service";
// import { Livro } from "../../model/livro";
// import { LivrosService } from "../livros/livros.service";
// import { Cliente } from "../../model/cliente";
// import {HomeService} from "../../home/home.service";
//
// @Component({
//   selector: 'app-devolucao',
//   templateUrl: './carrinho.component.html',
//   styleUrls: ['./carrinho.component.css']
// })
// export class CarrinhoComponent {
//   livro: Livro = new Livro();
//   venda: Venda = new Venda();
//   cliente: Cliente = new Cliente();
//   clientes: Cliente[] = [];
//   pegarvalores: number = 0;
//
//
//   livrosCarrinho: Livro[] = [];
//   clientesCarrOriginais: Cliente[] = [];
//   clientesCarr: Cliente[] = [];
//
//   formas = [
//     {
//       forma_pagamento: 'Pix'
//     },
//     {
//       forma_pagamento: 'Cartão de Crédito'
//     },
//     {
//       forma_pagamento: 'Cartão de Débito'
//     },
//     {
//       forma_pagamento: 'Dinheiro'
//     }
//   ];
//
//   constructor(
//     private service: CarrinhoService,
//     private livroservice: LivrosService,
//     private clienteService: ClienteService,
//     private carrinhoService: CarrinhoService,
//     private hservice:HomeService
//   ) {}
//
//   ngOnInit(): void {
//     this.receberlivros();
//     this.receberclientes();
//     this.livrosCarrinho.forEach((livro) => {
//       livro.quantidade = 1;
//     });
//     this.service.listar()
//   }
//
//   receberlivros(): void {
//     this.livrosCarrinho = this.livroservice.getLivrosPegos();
//     console.log("carrinho:", JSON.stringify(this.livrosCarrinho));
//   }
//
//   receberclientes(): void {
//     this.clientesCarrOriginais = this.clienteService.getLivrosPegos();
//     this.clientesCarr = this.clientesCarrOriginais;
//     console.log("carrinho clientes:", JSON.stringify(this.clientesCarr));
//   }
//
//   atualizarPrecoTotal(livro: Livro): void {
//     console.log("QUANTIDADE CARRINHO:", livro.quantidade);
//     if (livro.quantidade && livro.quantidade >= 1) {
//       livro.precoTotal = livro.preco * livro.quantidade;
//     } else {
//       livro.precoTotal = 0;
//     }
//   }
//
//   quantidadeum(livro: Livro): void {
//     livro.precoTotal = livro.preco * livro.quantidade;
//   }
//
//   calcularTotal(): number {
//     let total = 0;
//     for (let livro of this.livrosCarrinho) {
//       total += livro.precoTotal;
//     }
//     return total;
//   }
//
//   removerLivro(index: number): void {
//     this.livrosCarrinho.splice(index, 1);
//   }
//
//   filtrar(palavraChave: string): void {
//     if (palavraChave) {
//       palavraChave = palavraChave.toUpperCase();
//       this.clientesCarr = this.clientesCarrOriginais.filter(
//         (cliente) =>
//           cliente.nome_cliente.toUpperCase().indexOf(palavraChave) >= 0 ||
//           (cliente.cpf && cliente.cpf.indexOf(palavraChave) >= 0)
//       );
//     } else {
//       this.clientesCarr = this.clientesCarrOriginais;
//     }
//   }
//
//
//   clienteSelecionado: Cliente | null = null;
//
//   selecionarCliente(cliente: Cliente): void {
//     this.clienteSelecionado = cliente;
//     setTimeout(() => {
//       this.clienteSelecionado = null;
//     }, 600000 );
//   }
//
//   protected readonly NaN = NaN;
//
//   realizarvenda(livrosCarrinho: Livro[], venda: Venda): void {
//     if (this.clienteSelecionado && this.livrosCarrinho.length > 0) {
//       this.calcularTotal()
//       console.log("realizarvenda")
//       this.pegarvalores=this.calcularTotal()
//       venda.valor_total_venda=this.calcularTotal()
//       console.log("ID CLIENTE:"+venda.id_cli)
//       console.log("ID LIVRO:"+venda.id_liv)
//       for (const livro of livrosCarrinho) {
//         venda.id_cli = this.clienteSelecionado.id_cli
//         venda.id_liv = livro.id_liv
//         venda.quantidade = livro.quantidade
//         console.log("********************************")
//         console.log("GET_ESTOQUE LIVRO:" + livro.estoque_liv)
//         console.log("GET QUANTIDADE VENDA:" + venda.quantidade)
//         console.log("********************************")
//         if (venda.quantidade > livro.estoque_liv) {
//           alert("O LIVRO "+livro.nome_livro + " NÃO POSSUI ESTOQUE O SUFICIENTE PARA ESTA VENDA")
//         }else{
//         venda.email = this.hservice.getEmail()
//         this.carrinhoService.enviarDadosVenda(venda).subscribe(
//           () => {
//           }
//         )
//       }
//       }
//
//     } else {
//       console.log("algo deu errado na venda")
//     }
//   console.log("VINDO DO BACK")
//     console.log("id venda"+venda.id_venda)
//   }
//
// }
//


import { Component } from '@angular/core';
import { Venda } from "../../model/Venda";
import { ClienteService } from "../cliente/cliente.service";
import { NgForm } from "@angular/forms";
import { Editora } from "../../model/editora";
import { CarrinhoService } from "./carrinho.service";
import { Livro } from "../../model/livro";
import { LivrosService } from "../livros/livros.service";
import { Cliente } from "../../model/cliente";
import { HomeService } from "../../home/home.service";

@Component({
  selector: 'app-devolucao',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  livro: Livro = new Livro();
  venda: Venda = new Venda();
  cliente: Cliente = new Cliente();
  clientes: Cliente[] = [];
  pegarvalores: number = 0;

  livrosCarrinho: Livro[] = [];
  clientesCarrOriginais: Cliente[] = [];
  clientesCarr: Cliente[] = [];
  mostrarTabelaClientes = false;

  formas = [
    {
      forma_pagamento: 'Pix'
    },
    {
      forma_pagamento: 'Cartão de Crédito'
    },
    {
      forma_pagamento: 'Cartão de Débito'
    },
    {
      forma_pagamento: 'Dinheiro'
    }
  ];

  constructor(
    private service: CarrinhoService,
    private livroservice: LivrosService,
    private clienteService: ClienteService,
    private carrinhoService: CarrinhoService,
    private hservice: HomeService
  ) {}

  ngOnInit(): void {
    this.receberlivros();
    this.receberclientes();
    // this.livrosCarrinho.forEach((livro) => {
    //   livro.quantidade = 1;
    // });
    this.service.listar();
  }

  receberlivros(): void {
    this.livrosCarrinho = this.livroservice.getLivrosPegos();
    console.log("carrinho:", JSON.stringify(this.livrosCarrinho));
  }

  receberclientes(): void {
    this.clientesCarrOriginais = this.clienteService.getLivrosPegos();
    this.clientesCarr = this.clientesCarrOriginais;
    console.log("carrinho clientes:", JSON.stringify(this.clientesCarr));
  }

  atualizarPrecoTotal(livro: Livro): void {
    console.log("QUANTIDADE CARRINHO:", livro.quantidade);
    if (livro.quantidade && livro.quantidade >= 1) {
      livro.precoTotal = livro.preco * livro.quantidade;
    } else {
      livro.precoTotal = 0;
    }
  }

  quantidadeum(livro: Livro): void {
    livro.precoTotal = livro.preco * livro.quantidade;
  }

  calcularTotal(): number {
    let total = 0;
    for (let livro of this.livrosCarrinho) {
      total += livro.precoTotal;
    }
    return total;
  }

  removerLivro(index: number): void {
    this.livrosCarrinho.splice(index, 1);
  }

  // filtrar(palavraChave: string): void {
  //   if (palavraChave) {
  //     palavraChave = palavraChave.toUpperCase();
  //     this.clientesCarr = this.clientesCarrOriginais.filter(
  //       (cliente) =>
  //         cliente.nome_cliente.toUpperCase().indexOf(palavraChave) >= 0 ||
  //         (cliente.cpf && cliente.cpf.indexOf(palavraChave) >= 0)
  //     );
  //   } else {
  //     this.clientesCarr = this.clientesCarrOriginais;
  //   }
  //   this.mostrarTabelaClientes = this.clientesCarr.length > 0;
  // }
  filtrar(palavraChave: string): void {
    if (palavraChave) {
      // Filtro dos clientes com base na palavra-chave
      palavraChave = palavraChave.toUpperCase();
      this.clientesCarr = this.clientesCarrOriginais.filter(
        (cliente) =>
          cliente.nome_cliente.toUpperCase().indexOf(palavraChave) >= 0 ||
          (cliente.cpf && cliente.cpf.indexOf(palavraChave) >= 0)
      );
    } else {
      // Caso a palavra-chave seja vazia, ocultar a tabela de clientes
      this.clientesCarr = this.clientesCarrOriginais;
      this.mostrarTabelaClientes = false;
      return; // Adicionando o return aqui para sair da função quando a tabela for ocultada
    }

    this.mostrarTabelaClientes = this.clientesCarr.length > 0;
  }


  clienteSelecionado: Cliente | null = null;

  selecionarCliente(cliente: Cliente): void {
    this.clienteSelecionado = cliente;
    setTimeout(() => {
      this.clienteSelecionado = null;
    }, 600000);
  }

  protected readonly NaN = NaN;

  realizarvenda(livrosCarrinho: Livro[], venda: Venda): void {
    if (this.clienteSelecionado && this.livrosCarrinho.length > 0) {
      this.calcularTotal();
      console.log("realizarvenda");
      this.pegarvalores = this.calcularTotal();
      venda.valor_total_venda = this.calcularTotal();
      console.log("ID CLIENTE:" + venda.id_cli);
      console.log("ID LIVRO:" + venda.id_liv);
      for (const livro of livrosCarrinho) {
        venda.id_cli = this.clienteSelecionado.id_cli;
        venda.id_liv = livro.id_liv;
        venda.quantidade = livro.quantidade;
        console.log("********************************");
        console.log("GET_ESTOQUE LIVRO:" + livro.estoque_liv);
        console.log("GET QUANTIDADE VENDA:" + venda.quantidade);
        console.log("********************************");
        if (venda.quantidade > livro.estoque_liv) {
          alert("O LIVRO " + livro.nome_livro + " NÃO POSSUI ESTOQUE O SUFICIENTE PARA ESTA VENDA");
        } else {
          venda.email = this.hservice.getEmail();
          this.carrinhoService.enviarDadosVenda(venda).subscribe(() => {});
          alert("VENDA REALIZADA COM SUCESSO")
        }
      }
    } else {
      console.log("algo deu errado na venda");
    }
    console.log("VINDO DO BACK");
    console.log("id venda" + venda.id_venda);
  }
}


