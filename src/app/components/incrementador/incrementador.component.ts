import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  //inOnInit se ejecuta solo una vez al iniciar el modulo
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  // @Input('valor') progress:number = 50; //Se puede renombrar el decorador
  @Input('valueInput') progress:number = 50; //El decorador Input indica que puede recibir valores del padre
  @Input() btnClass:string = 'btn-primary'; //inicializamos con la clase de boostrap

  @Output() valueOutput: EventEmitter<number> = new EventEmitter;

  changeValue(value:number){

    if (this.progress + value >= 100 ){
      this.valueOutput.emit(100);
      this.progress = 100;
      return;
    }else if (this.progress + value <= 0){
      this.valueOutput.emit(0);
      this.progress = 0;
      return;
    }else{
      this.progress += value;
      this.valueOutput.emit(this.progress);
    }

  }

  onChange(value:number){
    if(value >= 100){
      this.progress = 100
    }else if(value <= 0){
      this.progress = 0;
    }else{
      this.progress = value;
    }
    this.valueOutput.emit(this.progress);
  }

}
