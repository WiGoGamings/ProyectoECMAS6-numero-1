//inicializo el arreglo de viajes
let viajes = []; 


//aqui calculo el costo del viaje
//trato de usar ecma6 lo mas posible aplicando lo que medio e aprendido afuera del curso de devf. 
//tambien uso un poco la ayuda de youtube y tambien de chatgpt
const calcularCosto = (destino, transporte, personas) => {
    let base = 1200; //costo base por persona

    //aqui defino las tarifas por destino

    const tarifas = {
        "parís": 1999,
        "roma": 1299,
        "tokio": 2199,
        "londres": 1499,
        "madrid": 1199,
        "buenos aires": 999,
        "sydney": 2499  

    };

    if (tarifas[destino.toLowerCase()]) {
        base = tarifas[destino.toLowerCase()];
    }


    //aqui calculo e precio dependiendo del transporte
    const extras = {
        "avión": 300,
        "tren": 150,
        "bus": 80,
        "barco": 250,
        "uber": 40
    };

    const extra = extras[transporte] || 0;

    let total = (base + extra) * personas;

    
    if (personas >= 3) {
        total *= 0.85;
    }

    return Math.round(total);
};


//aqui inicializo para agregar viaje
const registrarViaje = () => {
    const destino = document.getElementById("destino").value;
    const fecha = document.getElementById("fecha").value;
    const transporte = document.getElementById("transporte").value;
    const personas = parseInt(document.getElementById("personas").value);

    if (!destino || !fecha || personas < 1) {
        alert("Por favor completa todos los campos.");
        return;
    }

    viajes.push({ destino, fecha, transporte, personas });

    mostrarViajes();
};


//aqui inicializo para eliminar todo
const eliminarTodo = () => {
    if (confirm("¿Deseas eliminar todos los viajes?")) {
        viajes = [];
        mostrarViajes();
    }
};


//moostrar los viajes 
const mostrarViajes = () => {
    const lista = document.getElementById("listaViajes");
    lista.innerHTML = "";

    viajes.forEach(viaje => {
        const costo = calcularCosto(viaje.destino, viaje.transporte, viaje.personas);

        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <strong>Destino:</strong> ${viaje.destino}<br>
            <strong>Fecha:</strong> ${viaje.fecha}<br>
            <strong>Personas:</strong> ${viaje.personas}<br>
            <strong>Transporte:</strong> ${viaje.transporte}<br>
            <strong>Costo total:</strong> $${costo}
        `;

        lista.appendChild(card);
    });
};



document.getElementById("btnAgregar").addEventListener("click", registrarViaje); //aqui agramos el viaje

document.getElementById("btnEliminar").addEventListener("click", eliminarTodo); //aqui borramos los datos enviados

mostrarViajes();
