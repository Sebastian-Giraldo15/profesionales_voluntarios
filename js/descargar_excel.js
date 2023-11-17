document.addEventListener('DOMContentLoaded', function () {
    function descargarExcel() {
      // Obtener la tabla
      var tabla = document.querySelector('.table');
  
      // Obtener todas las filas de la tabla
      var filas = tabla.querySelectorAll('tr');
  
      // Crear un array para almacenar los datos de la tabla
      var datos = [];
  
      // Recorrer cada fila de la tabla
      filas.forEach(function (fila) {
        var filaDatos = [];
  
        // Obtener todas las celdas de la fila
        var celdas = fila.querySelectorAll('th,td');
  
        // Recorrer cada celda y agregar el texto al array de datos, excluyendo la columna "Opciones"
        celdas.forEach(function (celda, index) {
            if (index !== celdas.length - 1) { // Excluir la última celda (columna "Opciones")
                filaDatos.push(celda.innerText);
            }
        });
  
        // Agregar la fila de datos al array principal
        datos.push(filaDatos);
      });
  
      // Crear un objeto de libro de Excel
      var libro = XLSX.utils.book_new();
  
      // Crear una hoja de Excel y asignar los datos
      var hoja = XLSX.utils.aoa_to_sheet(datos);
      XLSX.utils.book_append_sheet(libro, hoja, 'Profesionales');
  
      // Descargar el archivo Excel
      XLSX.writeFile(libro, 'profesionales.xlsx');
  
    }
  
    document.getElementById('generarExcelBtn').addEventListener('click', descargarExcel);
});