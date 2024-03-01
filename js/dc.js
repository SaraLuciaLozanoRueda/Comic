const personajes=[
    {
        img:"https://i.pinimg.com/564x/ab/4b/aa/ab4baa7a3be962b15cd9562d08bab828.jpg",
        nombre:"Aquaman",
        info:"Arthur Curry es el rey de Atlantis, un reino submarino, y mitad humano, mitad atlante. Posee una variedad de habilidades acuáticas, incluyendo súper fuerza, velocidad, y comunicación telepática con la vida marina. Aquaman protege tanto la tierra como los mares."
    },
    {
        img:"https://i.pinimg.com/originals/b8/be/71/b8be71be3962c1f096c4a6ded4a46e65.jpg",
        nombre:"Batgirl",
        info:"Batgirl: Varios personajes han asumido el manto de Batgirl en DC Comics, siendo Barbara Gordon la más conocida. Es una hábil luchadora contra el crimen con habilidades en artes marciales e informática."
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Batman_%28black_background%29.jpg/220px-Batman_%28black_background%29.jpg",
        nombre:"Batman",
        info:"Batman: El legendario vigilante de DC Comics, Bruce Wayne, conocido como Batman, es un héroe sin superpoderes que lucha contra el crimen en Ciudad Gótica con su inteligencia, habilidades físicas y una amplia gama de gadgets."
    },
    {
        img:"https://i.pinimg.com/736x/09/4f/bd/094fbdd526843435752dd7097d1b8936.jpg",
        nombre:"CatWoman",
        info:"Catwoman: Selina Kyle, también conocida como Catwoman, es una hábil ladrona y antiheroína de DC Comics. Con su astucia, habilidades acrobáticas y amor por los gatos, es una figura ambigua en el mundo de Batman."
    },
    {
        img:"https://i.pinimg.com/originals/74/19/60/7419603b8d625ff836effeb4f8c9beac.png",
        nombre:"Cyborg",
        info:"Cyborg es un héroe de DC Comics, también conocido como Victor Stone. Después de un accidente que casi lo mata, su padre utiliza tecnología alienígena para salvarlo, convirtiéndolo en mitad humano y mitad máquina. Cyborg tiene una amplia gama de habilidades cibernéticas, incluyendo fuerza sobrehumana, vuelo, armamento integrado y la capacidad de comunicarse con la tecnología. Es un miembro destacado de los Jóvenes Titanes y la Liga de la Justicia, y lucha por la justicia y la igualdad entre humanos y máquinas."
    },
    {
        img:"https://static.zoomnews.com/photo/100986995/100986995.jpg",
        nombre:"Flash",
        info:"Flash: Conocido como el hombre más rápido del mundo, Flash es un héroe de DC Comics con la capacidad de correr a velocidades increíbles. Barry Allen es uno de los más conocidos, junto con otros como Jay Garrick y Wally West."
    },
    {
        img:"https://i.pinimg.com/originals/46/db/ca/46dbca537a1c95a8d0ef07159dbc1ecf.jpg",
        nombre:"Linterna Verde",
        info:"Linterna Verde: Los Linternas Verdes son miembros del Cuerpo de Linternas Verdes de DC Comics, que protegen el universo con anillos de poder. Hal Jordan es uno de los más conocidos, junto con otros como John Stewart y Kyle Rayner."
    },
    {
        img:"https://i.pinimg.com/236x/ef/7d/f8/ef7df8e490b5747970d094049e53b8a6.jpg",
        nombre:"Martian Manhunter",
        info:"J'onn J'onzz es el último sobreviviente de Marte, que llega a la Tierra y se convierte en el héroe conocido como Martian Manhunter. Posee una amplia gama de poderes, que incluyen la telepatía, la capacidad de cambiar de forma, la super fuerza y la visión de rayos X."
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Dick_Grayson_%28circa_2023%29.jpg/220px-Dick_Grayson_%28circa_2023%29.jpg",
        nombre:"Nightwing",
        info:"Nightwing: Nightwing es el alias de Dick Grayson, el primer Robin de Batman después de dejar esa identidad. Es conocido por su traje azul y negro, su liderazgo y su lucha por la justicia en solitario en Ciudad Blüdhaven."
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvE1hOmX6DtlltOvRJoaFUgx_HRnqXF5vl9g297t7tDA&s",
        nombre:"Shazman",
        info:"Shazam: Conocido anteriormente como Capitán Marvel, Shazam es el superhéroe alter ego del joven Billy Batson en DC Comics. Al decir la palabra ¡Shazam!, se transforma en un poderoso héroe con una variedad de habilidades sobrehumanas."
    },
    {
        img:"https://i.pinimg.com/474x/a6/c9/12/a6c9124369dee0a6a593393d751eaf43.jpg",
        nombre:"Supergirl ",
        info:"Kara Zor-El es la prima de Superman que escapó de la destrucción de Krypton y llegó a la Tierra. Adopta la identidad de Supergirl y utiliza sus habilidades similares a las de Superman para proteger al mundo de diversas amenazas."
    },
    {
        nombre:"SuperMan",
        img:"https://media.revistagq.com/photos/6050e0cc267aa4eef01d2e77/1:1/w_844,h_844,c_limit/henry-cavill-entrenamiento-superman.jpeg",
        info:" Superman es el icónico héroe de DC Comics, conocido como el último hijo de Krypton. Con habilidades sobrehumanas como vuelo, súper fuerza y visión de rayos X, lucha por la verdad, la justicia y el camino correcto."
    },
    {
        img:"https://www.machinegun.fr/products_img/11686/C_6.jpg",
        nombre:"Thor",
        info:"Thor es un poderoso dios asgardiano del trueno en Marvel Comics, conocido por su fuerza sobrehumana, su martillo mágico Mjolnir y su papel como miembro de los Vengadores. Creado por Stan Lee, Larry Lieber y Jack Kirby en 1962, es reconocido por su sentido del honor y su lucha contra el mal en la Tierra y más allá."
    },
    {
        img:"https://img.asmedia.epimg.net/resizer/Hb_YrOGhsHUOTRNcNIBj_l0Jg_M=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/F7JPE34VIBKU5IORJEYVFZRUAY.jpg",
        nombre:"Wonder Woman",
        info:"Mujer Maravilla: La princesa amazona de DC Comics, Diana Prince, conocida como la Mujer Maravilla, es una poderosa guerrera con habilidades sobrehumanas y un símbolo de paz y empoderamiento femenino."
    },
    {
        img:"https://lafrikileria.com/blog/wp-content/uploads/2023/11/Zatanna-dc-comics-1024x576.jpg",
        nombre:"Zatanna",
        info:"Zatanna es una poderosa hechicera del universo de DC Comics. Su nombre completo es Zatanna Zatara y es descendiente de una larga línea de magos. Zatanna tiene la habilidad de realizar hechizos mágicos hablando las palabras al revés, lo que le permite controlar la realidad y realizar una amplia variedad de proezas mágicas. Es conocida por su traje de maga clásico, que incluye un sombrero de copa y un esmoquin, y por su personalidad carismática. Zatanna ha sido miembro de equipos como la Liga de la Justicia Dark y ha luchado tanto contra amenazas místicas como mundanas en la defensa del universo DC."
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