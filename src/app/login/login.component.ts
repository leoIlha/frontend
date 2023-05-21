import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Funcionario} from "../model/funcionario";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  funcionario : Funcionario = new Funcionario('leonardo',5,'55984435671','leo@teste','gerente','123');
  constructor(private router: Router, private service: LoginService) { }
  ngOnInit(): void {
  }
  logar(): void{
    this.service.login(this.funcionario).subscribe(u => {
      console.log('token: '+u.token);
      console.log('emaillogin:'+u.email)
      this.service.setarUsuarioLogado(u);
      this.service.setCargo(u.cargo)
      this.router.navigate(['/principal/home'])


    })
  }

}
