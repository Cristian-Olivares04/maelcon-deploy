import { Component, Input, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { Bitacora } from 'src/app/interfaces/objects.interface';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';
import { parseJsonText } from 'typescript';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.css', '../../../forms_styles.css']
})
export class BackupComponent implements OnInit {
  bitacora:Bitacora[]=this.MS._bitacora;
  public actionVal = this.MS.actionVal;
  contenido = '';

  @Input() datosBackUp = {
    nombre:''
  }

  constructor(private MS:MantenimientoService) {
    this.bitacora= this.MS._bitacora;
  }

  ngOnInit(): void {
  }

  exportCsv() {
    this.downloadFile(this.bitacora);
  }

  downloadFile(data) {
    let arrHeader = ["ID_USUARIO", "ID_OBJETO", "ACCION", "DESCRIPCION", "INFORMACION_ANTERIOR", "INFORMACION_ACTUAL", "FECHA_BITACORA"];
    let csvData = this.ConvertToCSV(data, arrHeader);
    //console.log(csvData)
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", `${this.datosBackUp.nombre}.csv`);
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
    this.datosBackUp.nombre='';
  }

  ConvertToCSV(objArray, headerList) {
    //console.log(objArray);
    //console.log(headerList);
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'N°;';

    let newHeaders = ["ID_USUARIO", "ID_OBJETO", "ACCION", "DESCRIPCION", "INFORMACION_ANTERIOR", "INFORMACION_ACTUAL", "FECHA_BITACORA"];

    for (let index in newHeaders) {
      row += newHeaders[index] + ';';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
      let line = (i + 1) + '';
      for (let index in headerList) {
        let head = headerList[index];
        line += '; ' + this.strRep(array[i][head]);
      }
      str += line + '\r\n';
    }
    this.contenido=str;
    return str;
  }

  strRep(data) {
    if(typeof data == "string") {
      let newData = data.replace(/;/g, ":");
       return newData;
    }
    else if(typeof data == "undefined") {
      return " --- ";
    }
    else if(typeof data == "number") {
      return  data.toString();
    }
    else {
      return data;
    }
  }
}
