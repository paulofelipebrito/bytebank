
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Transferencia } from '../models/transferencia/transferencia.module';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private listaTransferencia!: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  all(): Observable<Transferencia[]>
  { return this.httpClient.get<Transferencia[]>(this.url);}

  add(transferencia: Transferencia): Observable<Transferencia> {
    this.handleData(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  handleData(transferencia: any) {
    transferencia.data = new Date();
  }
}

