const formulario = document.getElementById("formulario");
console.log(formulario);
formulario.addEventListener("submit", event => {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("mail").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    //ERRORES
    const errorNombre = document.getElementById("errorNombre"); 
    const errorApellido = document.getElementById("errorApellido");
    const errorEmail = document.getElementById("errorMail");
    const errorWhatsapp = document.getElementById("errorWhatsapp");
    //formulario
    let formularioValido = true;
    if (nombre === "") {
        errorNombre.classList.remove("d-none");
        formularioValido = false;
        console.log(formularioValido);
    } else {
        errorNombre.classList.add("d-none");
    }
    if (apellido === ""){
        errorApellido.classList.remove("d-none");
        formularioValido= false;
         console.log(formularioValido);
    }else {errorApellido.classList.add("d-none");}
    
    if (whatsapp === "" || whatsapp.length < 10){
        errorWhatsapp.classList.remove("d-none");
        formularioValido = false;
         console.log(formularioValido);
    } else{errorWhatsapp.classList.add("d-none");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorEmail.classList.remove("d-none");
        formularioValido = false;
         console.log(formularioValido);
    } else {
        errorEmail.classList.add("d-none");
    }
        if (formularioValido === false) {
            alert("Por favor, completar el formulario");
            console.log("no arranco");
        } else {
            alert("El formulario ha sido completado");}
         
});
