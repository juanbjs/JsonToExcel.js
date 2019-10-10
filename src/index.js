import { jsonToExcel } from './json-to-excel';

let rowsHeader = [
  { label: 'Columna 1', id: 'a' },
  { label: 'Columna 2', id: 'b' },
  { label: 'Columna 3', id: 'c' },
];

let rowsData = [
  { 
    a : 'Ejemplo de dato de columna1', 
    b : 'Ejemplo de dato de columna2', 
    c : 'Ejemplo de dato de columna3', 
  }
]

jsonToExcel(rowsHeader, rowsData, "Archivo Ejemplo")
