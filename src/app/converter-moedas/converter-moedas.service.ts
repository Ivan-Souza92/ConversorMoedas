import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterMoedasService {

  constructor(private http: HttpClient) { }

  converterMoedas(moedaOrigem:String, moedaDestino:String, valor: number): Observable<any>{

    return this.http.get("https://api.exchangerate.host/convert?from="+moedaOrigem+"&to="+moedaDestino+"&amount="+valor);
  }
}
