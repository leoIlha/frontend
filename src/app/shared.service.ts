// shared.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedService {
  cargo = new Subject<string>();

  enviarCargo(cargo: string) {
    this.cargo.next(cargo);
  }
}
