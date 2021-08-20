import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private listaTransferencia!: any[];

  constructor() {
    this.listaTransferencia = [];
   }

  get transferencias(){
    return this.listaTransferencia;
  }

  add (transferencia: any)
  {
    this.handleData(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  handleData (transferencia: any)
  {
    transferencia.data =  new Date();
  }
}

