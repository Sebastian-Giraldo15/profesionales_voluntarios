const alerta_eliminar = () => {
    Swal.fire({
        title: "Estas seguro?",
        text: "No podras revertir esto!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borralo!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Listo!",
            text: "Registro eliminado",
            icon: "success"
          });
        }
      });
}

// const eliminar = document.querySelector('#eliminar')
// eliminar.addEventListener('Click', alerta_eliminar());