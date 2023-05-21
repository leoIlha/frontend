import {ErrorHandler, Injectable} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {FuncionariosService} from "../principal/funcionarios/funcionarios.service";

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService extends ErrorHandler{

  constructor(private  router: Router) {
    super();
  }


  override handleError(error: HttpErrorResponse | any) {
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 400:
          alert('Usuario ou senha Incorretos 400')
          break;
        case 500:
          //alert(' API deu PAU')
          //ARRUMAR
          this.router.navigate(['/login']);
          break;
        case 501:
          alert('asdasds')
          break;

      }
    }
  }
}
