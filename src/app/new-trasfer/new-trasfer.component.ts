import { TransferService } from './../services/transfer.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Transferencia } from '../models/transferencia/transferencia.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-trasfer',
  templateUrl: './new-trasfer.component.html',
  styleUrls: ['./new-trasfer.component.scss']
})
export class NewTrasferComponent implements OnInit {

  constructor(private service: TransferService, private router: Router) {


   }

  ngOnInit(): void {
  }

  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  transferir(){
    console.log('Solicitada nova tranferência');
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.service.add(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extract');
    },
    error => console.error(error)
    );

  }
  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
