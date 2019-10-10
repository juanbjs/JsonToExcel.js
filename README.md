# JsonToExcel.js
This library converts JSON data to .xlsx

# Tutorial
 - Copy the file src/json-to-excel.js to your proyect
 - Import this function
    import { jsonToExcel } from './json-to-excel';
 - Create a variable with a data collection in JSON, this variable would contain a data do you want export
    let rowsData = [
      { 
        a : 'Ejemplo de dato de columna1', 
        b : 'Ejemplo de dato de columna2', 
        c : 'Ejemplo de dato de columna3', 
      }
    ]
 - Create a variable with this structure
    let rowsHeader = [
        { label: 'Columna 1', id: 'a' },
        { label: 'Columna 2', id: 'b' },
        { label: 'Columna 3', id: 'c' },
    ];
    In this array you see a json object
        In the "label" key we define the name of the column in excel
        In the "id" key we define the reference to the Json key of you data colection
 - call to this function jsonToExcel(rowsHeader, rowsData, "Archivo Ejemplo")