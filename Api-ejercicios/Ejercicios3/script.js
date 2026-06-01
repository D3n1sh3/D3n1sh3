const btnPerro = document.getElementById("btnPerro");
const imgPerro = document.getElementById("imgPerro");

btnPerro.addEventListener("click", mostrarPerro);

function mostrarPerro() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            imgPerro.src = data.message;
        })
        .catch(error => console.log(error));
}