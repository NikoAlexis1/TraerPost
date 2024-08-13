const consultarPost = async () => {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const resultado = await fetch(url);
        const datos = await resultado.json();
        let lista = document.querySelector("#post-data ul");
        datos.forEach(element => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${element.title}</strong><br>${element.body}<br><br>`;
            lista.appendChild(listItem);
        });
    } catch (error) {
        console.log(error);
    }
}

function definirBoton(){
    let boton = document.getElementById("traerPostBtn");
    boton.addEventListener("click",consultarPost);
}

definirBoton();
