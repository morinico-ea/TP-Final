const catalogo = [
    {
        id: 1,
        title: "Masaje Tailandes Tradicional",
        description:
            "Es un masaje profundo que ayuda a restablecer la energía vital del cuerpo. Este masaje combina técnicas de acupresión y yoga, calmando tención a través de técnicas de estiramientos, preción de pulgares, codos, rodillas e incluso pies.",
        image: "../img/masajeTailandes.jpg",
        rating: {
            rate: 3.9,
            count: 120,
        },
    },
    {
        id: 2,
        title: "Masaje con piedras bolcanicas calientes",
        description:
            "Se trata de un masaje con piedras de origen volcánico que por sus propiedades retienen el calor y lo liberan progresivamente, esto es ideal para trabajar dolencias musculares a la vez que se liberan toxinas gracias a la sudoración producida por el efecto térmico",
        image: "../img/masajeConPiedras.jpg",
        rating: {
            rate: 3.6,
            count: 145,
        },
    },
    {
        id: 3,
        title: "Masaje Facial",
        description:
            "El masaje facial es un tratamiento de belleza que abarca técnicas basadas en manioulaciones manuales del cutis. Por lo general, se realizan pequeños movimientos sobre el rostro, aplicando diferentes grados de intencidad, superficial o profunda.",
        image: "../img/masajeFacial.jpg",
        rating: {
            rate: 3.6,
            count: 145,
        },
    },
    {
        id: 4,
        title: "Masaje Fangoterapia",
        description:
            "La Fangoterapia es una terapia que consiste en la aplicación de fangos o barros terapéuticos para tratar diferentes afecciones, aunque su mayo beneficio se da en el tratamiento de problemas de pa piel y del aparato locomotor.",
        image: "../img/fangoterapia.jpg",
        rating: {
            rate: 3.6,
            count: 145,
        },
    },
    {
        id: 5,
        title: "Masaje Descontracturante",
        description:
            "Es un masaje que usa técnicas de terapia manual y consiste en usar maniobras profundas e intensas, que van dirijidas en las zonas del dolor y buscan eliminar las contracturas y punto de gatillo, ayudando a recuperar la función normal del músculo",
        image: "../img/masajeDescontracturante.jpg",
        rating: {
            rate: 3.6,
            count: 145,
        },
    },
    {
        id: 6,
        title: "Masaje Relajante",
        description:
            "El masaje relajante consiste en técnicas de maniobras superficiales en las que la intencidad de la presión es suave y el ritmo lento, de manera que al recibir un contacto repetido y constante, se pierde la sensación de dolor y los músculos de relajan.",
        image: "../img/masajerelajante.jpg",
        rating: {
            rate: 3.6,
            count: 145,
        },
    },
    {
        id: 7,
        title: "Masaje Circulatorio",
        description:
            "El masaje cicultorio tiene el objetivo de activar el riego sanguíneo y linfático para favorecer el intecambio celular. Con esta técnica movilizamos los líquidos corporales y favorecemos la eliminación de toxinas ya que se consigue que estas alcancen los órganos y ganglios encargados de suprimirlas.",
        image: "../img/masajecirculatorio.jpg",
        rating: {
            rate: 3.6,
            count: 145,
        },
    },
    {
        id: 8,
        title: "Masaje Drenaje Linfático",
        description:
            "El drenaje linfático manual es una técnica que se realiza con las manos a través de movimientos muy suaves, lentos y repetitivos que favorecen la ciculación de la linfa, mejorando así cuadros edematosos, inflamaciones y retenciones de líquidos orgánicos.",
        image: "../img/masajelinfatico.jpg",
        rating: {
            rate: 3.6,
            count: 145,
        },
    },
];


let card = document.getElementById("carta");


catalogo.map((producto) => {
    card.innerHTML+= `
        <div class="col-md-5 m-4">
            <div class="card h-100 text-center p-3" key= ${producto.id} >
                <img src= ${producto.image} className="card-img-top" alt= ${producto.title} height="300px" />
                <div class="card-body p-2">
                    <h5 class="card-title mb-0"> ${producto.title.substring(0,40)}...</h5>
                    <p class="card-title mb-0"> ${producto.description}...</p>
                </div>  
            </div>
        </div>
    `
});
