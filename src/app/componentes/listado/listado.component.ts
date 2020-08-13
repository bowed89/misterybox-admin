import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import * as Excel from "exceljs/dist/exceljs.min.js";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  clientes: any;

  sName:string;
  excelFileName:string;
 /*  sheet.columns = [
    { key: 'Nombres y Apellidos' },
    { key: 'Carnet de Identidad' },
    { key: 'Número de teléfono' },
    { key: 'Correo Electrónico' },
    { key: 'Nro Factura' },
    { key: 'Monto en Bs.' },
    { key: 'Ciudad' },
    { key: 'Premio' },
    { key: 'Fecha Premio' }


  ]; */
  cols =['Nombres y Apellidos','Carnet de Identidad','Número de teléfono','Correo Electrónico','Nro Factura', 'Monto en Bs.', 'Ciudad', 'Premio', 'Fecha Premio']
  
  
  blobType: string = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';



  constructor(
    private _clientesService: ClientesService
  ) { }

  ngOnInit(): void {

    this._clientesService.obtenerClientes().subscribe(resp => {

      this.clientes = resp.map(e => {

        return {

          nombres: e.payload.doc.data()['nombre'],
          premio: e.payload.doc.data()['premio'],
          telefono: e.payload.doc.data()['telefono'],
          carnet: e.payload.doc.data()['carnet'],
          ciudad: e.payload.doc.data()['ciudad'],
          correo: e.payload.doc.data()['correo'],
          factura: e.payload.doc.data()['factura'],
          fecha: e.payload.doc.data()['fecha'],
          monto: e.payload.doc.data()['monto'],

        }

      });
      console.log(this.clientes)
    });



  }

  exportToExcel() {
    var workbook = new Excel.Workbook();
    workbook.creator = 'Web';
    workbook.lastModifiedBy ='Web';
    workbook.created = new Date();
    workbook.modified = new Date();
    workbook.addWorksheet(this.sName, { views: [{ state: 'frozen', ySplit: 3, xSplit: 2, activeCell: 'A1', showGridLines: false }] })
    var sheet = workbook.getWorksheet(1);
    var head1 = ["Exported Data"];
    sheet.addRow(head1);
    sheet.addRow("");
    sheet.getRow(3).values = this.cols;
    sheet.columns = [
      { key: 'col1' },
      { key: 'col2' },
      { key: 'col3' },
      { key: 'col4' },
      { key: 'col5' },
      { key: 'col6' },
      { key: 'col7' },
      { key: 'col8' },
      { key: 'col9' },
      
    ];

 
    for(let i in this.clientes) {
      


      let data=[
        
        {col1: this.clientes[i].nombres, col2: this.clientes[i].carnet, col3: this.clientes[i].telefono, col4: this.clientes[i].correo, col5: this.clientes[i].factura, col6: this.clientes[i].monto, col7: this.clientes[i].ciudad, col8: this.clientes[i].premio, col9: this.clientes[i].fecha },

      ]



      sheet.addRows(data);
      workbook.xlsx.writeBuffer().then(data => {
        var blob = new Blob([data], { type: this.blobType });
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.href = url;
        a.download = this.excelFileName;
        a.click();
 
      });

    }


  }

}
