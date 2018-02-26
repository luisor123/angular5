import { Injectable } from '@angular/core';

@Injectable()
export class Servicio1Service {
 public variable:number = 15;

  constructor() { }
  getNumero():number{
  return this.variable;
}

}
