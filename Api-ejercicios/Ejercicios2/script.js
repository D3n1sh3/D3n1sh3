const usuario = document.getElementById("usuario"); 

fetch('https://jsonplaceholder.typicode.com/users/1', {
    
     method: 'GET'
})

.then(response => response.json())
.then(data => {
    
    const lista = document.createElement('ul');
    const nombre = document.createElement('li');
    nombre.textContent = data.name;
    const email = document.createElement('li');
    email.textContent = data.email;
    const telefono = document.createElement('li');
    telefono.textContent = data.phone;

    lista.appendChild(nombre);
    lista.appendChild(email);
    lista.appendChild(telefono);

    usuario.appendChild(lista);

})
.catch(error => console.log(error));

