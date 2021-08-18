import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-trasfer',
  templateUrl: './new-trasfer.component.html',
  styleUrls: ['./new-trasfer.component.scss']
})
export class NewTrasferComponent implements OnInit {

  constructor() {


   }

  ngOnInit(): void {
  }

  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  transferir(){
    console.log('Solicitada nova tranferência');
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
  }
  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
