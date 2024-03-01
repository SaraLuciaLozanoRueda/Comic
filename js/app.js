const personajes = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZ20MW1sMirPSBn3HMlsfT8Wo4ay4htg-Nc55iTq4VA&s",
        nombre: "Ant Man",
        info: "Ant-Man es el alias de varios personajes de Marvel Comics, pero el más conocido es Scott Lang. Con un traje que le permite cambiar de tamaño y comunicarse con hormigas, lucha contra el crimen como un héroe diminuto pero poderoso."
    },
    {
        img:"https://i.pinimg.com/originals/c2/7b/f3/c27bf3ef1ee6313eaa73515ec9872592.png",
        nombre:"Black Panther ",
        info:"T'Challa, el rey de Wakanda, adopta el manto de Black Panther, un guerrero altamente entrenado con habilidades sobrehumanas y acceso al metal vibranium, para proteger a su nación y al mundo."
    },
    {
        img: "https://i.pinimg.com/originals/61/f8/5b/61f85b07cb2da06657e7a460d5bd6ce8.png",
        nombre: "Black Widow",
        info: "Black Widow, o Viuda Negra, es el alias de Natasha Romanoff en Marvel Comics. Es una experta en espionaje y combate cuerpo a cuerpo, conocida por su habilidad para derrotar a enemigos mucho más grandes y poderosos."
        },
    {
        img: "https://i.pinimg.com/originals/89/39/93/893993cf74bf7bd4c2f6cf445db31e7e.png",
        nombre: "Capitan America",
        info: "Steve Rogers, conocido como el Capitán América, es un héroe de Marvel Comics. Después de recibir el suero del súper soldado durante la Segunda Guerra Mundial, se convierte en un símbolo de valentía, honor y justicia."
    },
    {
        img: "https://i.pinimg.com/originals/7c/9f/3c/7c9f3c3c50a6c0f6df3981fe3baabd3d.png",
        nombre: "Capitana Marvel",
        info: "La Capitana Marvel es el alias de varios personajes en Marvel Comics, pero el más conocido es Carol Danvers. Después de una explosión que fusiona su ADN con el de un extraterrestre, adquiere poderes cósmicos y se convierte en una heroína intergaláctica."
    },
    {
        img: "https://seeklogo.com/images/D/deadpool-logo-94CDEB7021-seeklogo.com.png",
        nombre: "Deadpool",
        info: "Deadpool, o Wade Wilson, es un mercenario desfigurado que se convierte en un antihéroe en Marvel Comics. Con un humor irreverente y habilidades de curación regenerativa, lucha contra el crimen de una manera única y a menudo caótica."
    },
    {
        img:"https://f.vividscreen.info/soft/45ac0b98328c3d50ae84d21d90d3ea56/Hawkeye-superhero-in-Avengers-Infinity-War-2018-1920x1080.jpg",
        nombre:"Hawkeye ",
        info:"Clint Barton, un maestro arquero y experto en combate cuerpo a cuerpo, se une a los Vengadores como Hawkeye. Utiliza sus habilidades excepcionales para luchar contra las fuerzas del mal."
    },
    {
        img: "https://i.pinimg.com/564x/6f/7d/9f/6f7d9f352ff7be13ca32f68b76e12106.jpg",
        nombre: "Hulk",
        info: "Hulk es el alter ego del Dr. Bruce Banner en Marvel Comics. Después de ser expuesto a la radiación gamma, se transforma en una criatura gigante y poderosa cuando está enfurecido, luchando contra monstruos y villanos como una fuerza imparable."
    },
    {
        img: "https://i.pinimg.com/originals/63/59/b2/6359b264b0541a92bf61d60ac82ac277.png",
        nombre: "Iron Man",
        info: "Iron Man es el alias de Tony Stark en Marvel Comics. Como genio multimillonario y filántropo, construye un traje blindado de alta tecnología para luchar contra el crimen y proteger al mundo como un héroe tecnológico."
    },
    {
        img: "https://i.pinimg.com/736x/d3/37/e7/d337e7cd66f975803465f1e939103270.jpg",
        nombre: "Spider Man",
        info: "Spider-Man, o Peter Parker, es un héroe de Marvel Comics. Después de ser picado por una araña radiactiva, adquiere habilidades arácnidas como fuerza sobrehumana y la capacidad de trepar paredes, luchando contra villanos como un héroe amigable vecino."
    },
    {
        img:"https://i.pinimg.com/736x/81/c0/b8/81c0b826584a82d485314ee90b24fcf5.jpg",
        nombre:"Storm ",
        info:"Ororo Munroe, también conocida como Storm, es una mutante con el poder de controlar el clima. Es una líder de los X-Men y una defensora de la coexistencia pacífica entre humanos y mutantes."
    },
    {
        img: "https://i.pinimg.com/736x/80/96/03/809603a3214f7d14e37c978c6d8586ee.jpg",
        nombre: "Doctor Strange",
        info: " Doctor Strange, o Stephen Strange, es un hechicero maestro del universo Marvel Comics. Después de sufrir un accidente que daña sus manos, busca la ayuda del Anciano y se convierte en el Hechicero Supremo, defendiendo el mundo contra amenazas místicas."
    },
    {
        img: "https://i.pinimg.com/originals/ff/d0/6d/ffd06d826c0571dac0aa8c4fa076b89b.png",
        nombre: "Thor",
        info: "Thor es el dios del trueno de Asgard en Marvel Comics. Con su martillo mágico Mjolnir y sus habilidades sobrehumanas, lucha contra enemigos como una fuerza imparable, defendiendo los reinos tanto terrenales como divinos."
    },
    {
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9P-uRqlnV4SMdrKRVRssCwlG36TfmWBkDST7-puRPP-Vr6pZD0gu90S2J-6mL2Z53b-gTEgL0sGyTLxxODuWi7uXWsNMO685npzDj59W5If3EDU76WbC4pJC6-cDEIihv1zFZ44tEAXjgVgmfl9cJY6ChR79taFFnbWVbvkeFlQI7qu8V0rY9_N8I/s409/01%20Lobezno.png",
        nombre: "Wolverine",
        info: "Wolverine, también conocido como Logan, es un mutante en el universo de Marvel Comics. Con sus garras retráctiles de adamantium y un factor de curación regenerativa, es un guerrero feroz y uno de los miembros más icónicos de los X-Men. Su pasado está envuelto en misterio, y su actitud agresiva esconde un corazón noble y una lucha constante por el control de su naturaleza animal."
    },
    {
        img: "https://i.pinimg.com/564x/ca/d7/ca/cad7ca429725d723785bc5871dd4ad32.jpg",
        nombre: "Wong",
        info: "Wong es el leal sirviente y aliado del Doctor Strange en Marvel Comics. Como hechicero experto, Wong es un guardián del Sanctum Sanctorum y un maestro en el arte de las artes místicas. Su devoción al Doctor Strange es inquebrantable, y su sabiduría y habilidades son fundamentales para enfrentar las amenazas místicas que acechan al universo."
    }
]

function showHeroes() {
    const obtener = document.getElementById("principal");
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.display = 'none';

    const contenido = document.createElement('div');
    contenido.classList.add('contenido');

    const cerrar = document.createElement('span');
    cerrar.classList.add('cerrar');
    cerrar.textContent = 'Volver';

    const img = document.createElement('img');
    img.classList.add('imagen-modal');

    const descripcion = document.createElement('p');
    descripcion.classList.add('descripcion-modal');

    contenido.appendChild(cerrar);
    contenido.appendChild(img);
    contenido.appendChild(descripcion);
    modal.appendChild(contenido);

    personajes.forEach((personaje) => {
        const { img, nombre, info } = personaje;
        const heroDiv = document.createElement('div');
        heroDiv.classList.add('heroes');
        heroDiv.innerHTML = `
            <img src="${img}" alt="">
            <div> 
                <h3>${nombre}</h3>
            </div>
        `;

        const boton = document.createElement('button');
        boton.classList.add('boton');
        boton.textContent = 'Ver';

        boton.addEventListener('click', function () {
            modal.style.display = 'block';
            modal.style.top = '50%';
            modal.style.left = '50%';
            modal.style.transform = 'translate(-50%, -50%)'; 
            img.src = img;
            descripcion.textContent = info;
        });

        heroDiv.appendChild(boton);
        obtener.appendChild(heroDiv);
    });

    cerrar.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    document.body.appendChild(modal);

    const buscador = document.getElementById('searchInput');
    buscador.addEventListener('input', function(e){
        const frase = e.target.value.toLowerCase().trim(); 
        const filtrados = personajes.filter(personaje => {
            return personaje.nombre.toLowerCase().includes(frase);
        });
        obtener.innerHTML = ''; // Limpiar contenido anterior
        filtrados.forEach(personaje => {
            const heroDiv = document.createElement('div');
            heroDiv.classList.add('heroes');
            heroDiv.innerHTML = `
                <img src="${personaje.img}" alt="">
                <div> 
                    <h3>${personaje.nombre}</h3>
                </div>
            `;
            const boton = document.createElement('button');
            boton.classList.add('boton');
            boton.textContent = 'Ver';
            boton.addEventListener('click', function () {
                modal.style.display = 'block';
                modal.style.top = '50%';
                modal.style.left = '50%';
                modal.style.transform = 'translate(-50%, -50%)'; 
                img.src = personaje.img;
                descripcion.textContent = personaje.info;
            });
            heroDiv.appendChild(boton);
            obtener.appendChild(heroDiv);
        });
    });
}

showHeroes();









