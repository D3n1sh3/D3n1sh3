const formulario = document.querySelector("#formulario");
const input = document.querySelector("#tareas");
const lista = document.querySelector("#lista-tareas");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const textoTarea = input.value;
    if(textoTarea === ""){
        return;
    }

    const fila = document.createElement("div");
    fila.classList.add("fila");
    const tarea = document.createElement("h3");
    tarea.textContent = textoTarea;
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("eliminar");
    botonEliminar.addEventListener("click", function(){
        fila.remove();

    });

    fila.appendChild(tarea);
    fila.appendChild(botonEliminar);
    lista.appendChild(fila);
    input.value = "";

});