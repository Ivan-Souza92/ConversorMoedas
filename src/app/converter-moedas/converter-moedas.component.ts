import { Component, OnInit} from '@angular/core';
import {ConverterMoedasService} from "./converter-moedas.service";

@Component({
  selector: 'app-converter-moedas',
  templateUrl: './converter-moedas.component.html',
  styleUrls: ['./converter-moedas.component.css']
})
export class ConverterMoedasComponent implements OnInit {
  mOrigem: string = '';
  mDestino: string = '';
  value: string = '';
  valConvertido: number = 0;

  constructor(private converterMoedasService: ConverterMoedasService) { }

  ngOnInit(): void {
    this.convertedCurrency
  }

  convertedCurrency(){
   
    this.converterMoedasService.converterMoedas(this.mOrigem.toUpperCase(),this.mDestino.toUpperCase(), parseFloat(this.value)).subscribe( res => {
       
      //console.log(response);
      this.valConvertido = res.result.toFixed(2)
    })
  }
}
