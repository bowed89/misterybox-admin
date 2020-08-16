import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';

import * as XLSX from 'xlsx';

import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  clientes: any;
  fileName= 'ExcelSheet.xlsx';

  constructor(
    private _clientesService: ClientesService,
    private router: Router
  ) { }

  ngOnInit(): void {


    this._clientesService.obtenerClientes().subscribe(resp => {

      this.clientes = resp.map(e => {

        return {

          nombres: e.payload.doc.data()['nombre'],
          apellido: e.payload.doc.data()['apellido'],
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
      
    });

  }

  exportexcel() {

    let element = document.getElementById('excel-table'); 
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }



}
