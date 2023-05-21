import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login/login.service";
import { Funcionario } from '../model/funcionario';
import {FuncionariosService} from "./funcionarios/funcionarios.service";
import {SharedService} from "../shared.service";
import {HomeComponent} from "../home/home.component";


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  // usaux:Funcionario = new Funcionario();
  usuario: Funcionario = new Funcionario;
  constructor(private service: LoginService,private  servicefunc:FuncionariosService){ }

  // ngOnInit(): void {
  //   this.usuario= JSON.parse(<string>sessionStorage.getItem('usuario-logado'));
  //   console.log(this.usuario.email);
  //   this.verfunc(this.usuario.email)
  // }

  ngOnInit(): void {
    this.usuario= this.service.usuario_logado();
    console.log("principal cargo:"+this.usuario.cargo)
    console.log("principal:"+this.usuario.email);

 // this.service.levarhome(this.usuario.cargo)

  }

  // enviarCargo(cargo: string): void {
  //   this.shared.enviarCargo(cargo);
  // }

  logout() : void{
    this.service.logout();
  }

  }
  // enviarcargo(us?:string):void{
  // console.log("enivar cargo:"+us)
 //   this.pegarAuxComponent.usuario = new Funcionario();
  //  this.pegarAuxComponent.usuario.cargo = us;
  //  this.pegarAuxComponent.pegar();




