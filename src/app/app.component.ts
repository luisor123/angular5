import { Component } from '@angular/core';
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

  Verfechas() {
    var dia;
    var mes;
    var anio;
    dia = this.hoy.getDate();
    mes = this.hoy.getMonth();
    anio = this.hoy.getFullYear();
    console.log(this.hoy);

  }
}