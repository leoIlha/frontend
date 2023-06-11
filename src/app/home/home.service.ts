import { Injectable } from '@angular/core';
import {Funcionario} from "../model/funcionario";
import {Observable} from "rxjs";
import {Livro} from "../model/livro";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly url = 'http://localhost:8080/bib/funcionario';
  constructor(private http: HttpClient, private  router: Router) { }

  private email!:string | undefined | any;


  setEmail(email: any) {
      this.email = email;
    console.log("kk"+email)
  }

  getEmail() {
    return this.email;
  }

}
