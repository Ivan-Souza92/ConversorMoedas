import {Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

export interface moedaElement{
  code: string;
  description: string;
}

const Currency_Data: moedaElement[] = [

  {code:'AED', description:'Dirham dos Emirados'},
  {code:'CLP', description:'Chilean Peso'},
  {code:'HKD', description:'Hong Kong Dollar'},
  {code:'USD', description:'American Dollar'},
  {code:'HUF', description:'Forint'},
  {code:'JPY', description:'Iene'},
  {code:'ISK', description:'Icelandic Crown'},
  {code:'LBP', description:'Lebanese Pound'},
  {code:'MGA', description:'Ariary'},
  {code:'ARS', description:'Argentinian Peso'},
  {code:'BRL', description:'Brazilian Real'},
  {code:'BSD', description:'Bahamian Dollar'},
  {code:'MXN', description:'Mexican Peso'},
  {code:'NOK', description:'Norwegian krone'},
  {code:'RUB', description:'Ruble'},
  {code:'TRY', description:'New Turkish Lira'},
  {code:'EUR', description:'Euro'}
];


@Component({
  selector: 'app-listar-simbolos',
  templateUrl: './listar-simbolos.component.html',
  styleUrls: ['./listar-simbolos.component.css'],
})

export class ListarSimbolosComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['code', 'description'];
  dataSource = new MatTableDataSource(Currency_Data);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

       if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  

}
