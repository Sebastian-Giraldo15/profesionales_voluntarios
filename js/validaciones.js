document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('select');
    const formulario = document.getElementById('formulario');
    const tipoDocumento = document.getElementById('tipoDocumento');
    const documento = document.getElementById('documento');
    const fechaNacimiento = document.getElementById('fechaNacimiento');
    const paisNacimiento = document.getElementById('paisNacimiento');
    const deptNacimiento = document.getElementById('deptNacimiento');
    const munNacimiento = document.getElementById('munNacimiento');
    const genero =  document.getElementById('genero');
    const alergia = document.getElementById('alergia');
    const fechaInicial = document.getElementById('fechaInicial');
    const tipoVoluntario = document.getElementById('tipoVoluntario');
    const fechaFinal = document.getElementById('fechaFinal');
    const tipoProfesional = document.getElementById('tipoProfesional');
    const tipoAlergia = document.getElementById('tipoAlergia');
    const deptResidencia = document.getElementById('deptResidencia');
    const munResidencia = document.getElementById('munResidencia');
    const estadoCivil = document.getElementById('estadoCivil');
    const habilidades = document.getElementById('habilidades');
    const hablaOtroIdioma = document.getElementById('HablaOtroIdioma');
    const otroIdioma = document.getElementById('otroIdioma')
    const fechaIngreso = document.getElementById('fechaIngreso');
    const dependencia = document.getElementById('dependencia');
    const observaciones = document.getElementById('observaciones');
    const estado = document.getElementById('estado');
    const eps = document.getElementById('eps');
    const fondoPension = document.getElementById('fondoPension');
    const grupoSanguineo = document.getElementById('grupoSanguineo');
    // ... (resto de las variables)

    const validarDocumento = documento => {
        const re = /^\d+$/
        return re.test(documento)
    }

    const nombre = document.getElementById('nombre')
    const validarNombre = nombre => {
        const re = /^[A-Z\u00C0-\u00D6\u00D8-\u00DE][a-zA-Z\u00C0-\u00D6\u00D8-\u00DE ]*$/;
        return re.test(nombre);
    }

    const apellido = document.getElementById('apellido')
    const validarapellido = apellido =>  {
        const re = /^[A-Z\u00C0-\u00D6\u00D8-\u00DE][a-zA-Z\u00C0-\u00D6\u00D8-\u00DE ]*$/;
        return re.test(apellido)
    }

    const edad = document.getElementById('edad')
    const validarEdad = edad => {
        const re = /^(?:[1-9]|[1-9][0-9]|1[01][0-9]|120)$/
        return re.test(edad)
    }

    const barrio = document.getElementById('barrio')
    const validarBarrio = barrio => {
        const re = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]*$/
        return re.test(String(barrio))
    }

    const direccionResidencia = document.getElementById('direccionResidencia')
    const validarDireccionResidencia = direccion => {
        // Expresión regular que valida el formato de la dirección
        const re = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\d\s#.,;:'"-]*$/;
        return re.test(direccion);
    };

    const email = document.getElementById('email')
    const validarCorreo = email =>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const telefono = document.getElementById('telefono')
    const validarTelefono = telefono => {
        const re = /^\d{10}$/
        return re.test(String(telefono))
    }

    const fotografia = document.getElementById('fotografia')
    const validarFotografia = () => {
        const selectedFile = fotografia.files[0];

        if (!selectedFile) {
            setError(fotografia, 'Debes seleccionar un archivo.');
            return;
        }

        const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];
        const maxFileSizeMB = 5;  // Tamaño máximo permitido en megabytes

        if (!allowedFileTypes.includes(selectedFile.type)) {
            setError(fotografia, 'Tipo de archivo no permitido. Sube una imagen JPEG, PNG o GIF.');
            return;
        }

        if (selectedFile.size > maxFileSizeMB * 1024 * 1024) {
            setError(fotografia, `El archivo es demasiado grande. El tamaño máximo permitido es ${maxFileSizeMB} MB.`);
            return;
        }

        setSuccess(fotografia);
    };

    const profesion = document.getElementById('profesion')
    const validarProfesion = profesion => {
        const re = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]*$/
        return re.test(String(profesion))
    }

    const encargado = document.getElementById('encargado')
    const validarEncargado = encargado => {
        const re = /^[A-Z\u00C0-\u00D6\u00D8-\u00DE][a-zA-Z\u00C0-\u00D6\u00D8-\u00DE ]*$/;
        return re.test(encargado)
    }

    // Añadir funciones de validación para los demás campos

    // Agrega un evento de escucha para el evento submit del formulario
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        validateInputs();
    });


    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        if (inputControl && errorDisplay) {
            errorDisplay.innerText = message;
            inputControl.classList.add('error');
            inputControl.classList.remove('success');
        } else {
            console.error('Error: No se pudo encontrar el elemento de control o de visualización de error.');
        }
    }

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        if (inputControl && errorDisplay) {
            errorDisplay.innerText = "";
            inputControl.classList.add('success');
            inputControl.classList.remove('error');
        } else {
            console.error('Error: No se pudo encontrar el elemento de control o de visualización de error.');
        }
    }


    // Función principal para validar todos los campos del formulario
    const validateInputs = () => {
        // ... (resto de la función)
        const documentoValue = documento.value.trim()
        if (documentoValue ==="") {
            setError(documento, "No puedejes dejar este campo vacio.")
        } else if (!validarDocumento(documentoValue)) {
            setError(documento, 'Por favor, ingrese un documento válido.');
        } else {
            setSuccess(documento);
        }

        const tipoDocumentoValue = tipoDocumento.value.trim()
        if(tipoDocumentoValue === "seleccionar"){
            setError(tipoDocumento, 'Debes de seleccionar una opción valida')
        }else{
            setSuccess(tipoDocumento)
        }


        const nombreValue = nombre.value.trim()
        if (nombreValue ==="") {
            setError(nombre, "No puedes dejar este campo vacio.")
        } else if (!validarNombre(nombreValue)) {
            setError(nombre, 'Se debe iniciar con la letra mayuscula y no se permiten caracteres especiales');
        } else {
            setSuccess(nombre);
        }


        const apellidoValue = apellido.value.trim()
        if (apellidoValue ==="") {
            setError(apellido, "No puedes dejar este campo vacio.")
        } else if (!apellido(apellidoValue)) {
            setError(apellido, 'Se debe iniciar con la letra mayuscula y no se permiten caracteres especiales');
        } else {
            setSuccess(apellido);
        }

        const edadValue = edad.value.trim()
        if (edadValue === "") {
            setError(edad, 'No puedes dejar este campo vacío.');
        } else if (!validarEdad(edadValue)) {
            setError(edad, 'Ingresa una edad válida.');
        } else {
            setSuccess(edad);
        }

        const tipoAlergiaValue = tipoAlergia.value.trim()
        if (tipoAlergiaValue === "") {
            setError(tipoAlergia, 'No puedes dejar este campo vacío.');
        }

        const barrioValue = barrio.value.trim()
        if (barrioValue === "") {
            setError(barrio, 'No puedes dejar este campo vacío.');
        } else if (!validarBarrio(barrioValue)) {
            setError(barrio, 'No se permiten caracteres especiales.');
        } else {
            setSuccess(barrio);
        }

        const direccionResidenciaValue = direccionResidencia.value.trim()
        if (direccionResidenciaValue === "") {
            setError(direccionResidencia, 'No puedes dejar este campo vacío.');
        } else if (!validarDireccionResidencia(direccionResidenciaValue)) {
            setError(direccionResidencia, 'Ingresa una dirección de residencia válida.');
        } else {
            setSuccess(direccionResidencia);
        }
        
        const emailValue = email.value.trim()
        if (emailValue === "") {
            setError(email, 'No puedes dejar vacio este campo.');
        } else if (!validarCorreoElectronico(emailValue)) {
            setError(email, 'Ingresa un correo electrónico válido.');
        } else {
            setSuccess(email);
        }

        const telefonoValue = telefono.value.trim()
        if (telefonoValue === "") {
            setError(telefono, 'No puedes dejar vacio este campo.');
        } else if (!validarTelefono(telefonoValue)) {
            setError(telefono, 'Ingresa un número de teléfono válido (10 dígitos).');
        } else {
            setSuccess(telefono);
        }

        const profesionValue = profesion.value.trim();
        if (profesionValue === "") {
            setError(profesion, 'No puedes dejar este campo vacío.');
        } else if (!validarProfesion(profesionValue)) {
            setError(profesion, 'No se permiten caracteres especiales.');
        } else {
            setSuccess(profesion);
        }

        const habilidadesValue = habilidades.value.trim();
        if (habilidadesValue === "") {
            setError(habilidades, 'No puedes dejar este campo vacío.');
        }
        
        const encargadoValue = encargado.value.trim();
        if (encargadoValue ==="") {
            setError(encargado, "No puedes dejar este campo vacio.")
        } else if (!validarEncargado(encargadoValue)) {
            setError(encargado, 'Se debe iniciar con la letra mayuscula y no se permiten caracteres especiales');
        } else {
            setSuccess(encargado);
        }
    };
});
