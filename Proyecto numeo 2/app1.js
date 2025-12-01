// Lista de productos
let listaDeCompras = [];

// Selección de elementos
const inputProducto = document.getElementById("producto");
const btnAgregar = document.getElementById("btnAgregar");
const listaProductos = document.getElementById("listaProductos");

// Agregar producto
const agregarProducto = () => {
    let producto = inputProducto.value.trim();
    if (!producto) return;

    producto = producto.toLowerCase();

    if (listaDeCompras.includes(producto)) {
        alert(`⚠ El producto "${producto}" ya está en la lista.`);
        return;
    }

    listaDeCompras.push(producto);
    inputProducto.value = "";
    mostrarLista();
};

// Eliminar producto
const eliminarProducto = (producto) => {
    listaDeCompras = listaDeCompras.filter(p => p !== producto);
    mostrarLista();
};

// Mostrar lista
const mostrarLista = () => {
    listaProductos.innerHTML = "";

    listaDeCompras.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("producto-card");

        card.innerHTML = `
            <span>${producto}</span>
            <button onclick="eliminarProducto('${producto}')">Eliminar</button>
        `;

        listaProductos.appendChild(card);
    });
};

// Evento botón agregar
btnAgregar.addEventListener("click", agregarProducto);

// Enter para agregar
inputProducto.addEventListener("keypress", (e) => {
    if (e.key === "Enter") agregarProducto();
});

// Exportar eliminarProducto al scope global para poder usar onclick
window.eliminarProducto = eliminarProducto;
