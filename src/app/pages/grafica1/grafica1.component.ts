import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1:string[] = [ 'Jabón', 'Detergente', 'Aromatizante' ];

  public data1:number[] = [ 30, 60, 90 ];

  public color1:string[] = ['#6857E6','#009FEE','#F02059']

}
