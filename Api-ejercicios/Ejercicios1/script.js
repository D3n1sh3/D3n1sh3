const btnPersonaje = document.getElementById("btnPersonaje");
const personaje = document.getElementById("personaje");

btnPersonaje.addEventListener("click", () => {

        fetch('https://rickandmortyapi.com/api/character/1')

        .then(response => response.json())
        .then(data => {

        personaje.innerHTML = "";

        const nombre = document.createElement("h2");
        nombre.textContent = data.name; 
        const estado = document.createElement("h3");
        estado.textContent = data.status; 
        const imagen = document.createElement("img");
        imagen.src = data.image;
        
        personaje.appendChild(nombre);
        personaje.appendChild(estado);
        personaje.appendChild(imagen);

        });
})
.catch(error => console.log(error));
