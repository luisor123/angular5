import { Component } from '@angular/core';
import { Servicio1Service } from './servicio1.service';
@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public var1 = 'Bienvenido a las Ciudades calurosas';
  public var2 = 15;
  public hoy = new Date();
  public nombre = 'Luis';
  public numero = 0;
  constructor(
      public servicio1: Servicio1Service
  ){ }
  Verfechas() {
    var dia;
    var mes;
    var anio;
    dia = this.hoy.getDate();
    mes = this.hoy.getMonth();
    anio = this.hoy.getFullYear();
    console.log(this.hoy);
  }
  obtenerNumerodeServicio(){
    this.numero=this.servicio1.getNumero();
  }
}