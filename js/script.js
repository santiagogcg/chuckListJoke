// CAPTURAR ELEMENTOS DEL DOM
const botonElDOM = document.getElementById('fetchJoke');
const contenedorElDOM = document.getElementById('jokeList');


// OBTENGO AL CARGAR CHISTES DEL LOCAL STORAGE
const chistesJSON = localStorage.getItem("chistes")
const chistes = chistesJSON ? JSON.parse(chistesJSON) : []

// RECORRER CHISTES DEL LOCALSTORAGE Y CREAR UN LI POR CADA UNO
chistes.forEach(chiste => {
    const li = document.createElement('li');
    li.innerText = chiste;
    contenedorElDOM.appendChild(li);
});

console.log(chistes)

// CONFIGURA UN EVENTO TIPO "CLICK" AL BOTON
botonElDOM.addEventListener('click', function () {
    // > CUANDO EL USER HACE CLICK
    // TRAE UN CHISTE ALEATORIO DE LA API
    fetch('https://api.chucknorris.io/jokes/random')
        .then((res) => res.json())
        .then((chiste) => {
            // > CUANDO LLEGA LA RESPUESTA DE LA API


            // CREA UN ELEMENTO LI EN MEMORIA
            const li = document.createElement('li');

            // AÑADIR CHISTE AL ARRAY
            chistes.push(chiste.value);

            // SALVO EL ARRAY EN EL LOCALSTORAGE
            const chistesJSON = JSON.stringify(chistes)
            localStorage.setItem('chistes', chistesJSON)

            // AÑADIMOS EL CHISTE AL LI
            li.innerText = chiste.value;

            // AÑADIMOS EL LI COMO HIJO DEL CONTENDOR
            contenedorElDOM.appendChild(li);


        })
})