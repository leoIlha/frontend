import { Component, OnInit } from '@angular/core';
import {FuncionariosService} from "../principal/funcionarios/funcionarios.service";
import {Funcionario} from "../model/funcionario";
import {HomeService} from "./home.service";
import {SharedService} from "../shared.service";
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private hservice:HomeService,private lservice:LoginService) { }
  cargo: string | undefined;
  funcionario:Funcionario=new Funcionario();
  ngOnInit(): void {

    console.log("asdasd"+this.funcionario.email)
    this.cargo = this.lservice.getCargo();
    console.log("home cargo:"+this.cargo)

  }
  permissao():void{
  }
}




