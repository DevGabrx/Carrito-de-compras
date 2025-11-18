//Implemente esta clase para crear los productos
class Producto {
  constructor(id, nombre, precio, categoria, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.imagen = imagen;
  }
} 

let productosDisponibles = [
  { id: 1, nombre: "Laptop Gaming", precio: 1500, categoria: "Electrónica", imagen: "img/pcgamer.png" },
  { id: 2, nombre: "Smartphone", precio: 800, categoria: "Electrónica", imagen: "img/phone.png" },
  { id: 3, nombre: "Auriculares Bluetooth", precio: 150, categoria: "Electrónica", imagen: "img/audifonos.png" },
  { id: 4, nombre: "Camiseta Deportiva", precio: 25, categoria: "Ropa", imagen: "img/camisadeportiva.png" },
  { id: 5, nombre: "Zapatillas Running", precio: 120, categoria: "Ropa", imagen: "img/zapatilla.png" },
  { id: 6, nombre: "Silla Oficina", precio: 200, categoria: "Hogar", imagen: "img/sillagamer.png" },
  { id: 7, nombre: "Jersey NBA", precio: 45, categoria: "Ropa", imagen: "img/jerseynba.png" },
  { id: 8, nombre: "Pelota Fútbol", precio: 30, categoria: "Deportes", imagen: "img/brazuca.png" }
];

productosAdquiridos = [];
const carritoContenedor = document.getElementById("carrito-contenedor");
let total = 0;

function cargarProductos() {
  const productosGrid = document.getElementById("productosGrid");
  productosGrid.innerHTML = productosDisponibles
    .map(
      (producto, index) => `
        <div class="producto">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Categoría: ${producto.categoria}</p>
            <img src=${producto.imagen} width="200px" height="200px">
            
            <button onclick="agregarAlCarrito('${index}')" id="botonAgregar">Agregar al carrito</button>     
        </div>
    `
    )
    .join("");
}

//1.- Metodo crear producto

function AgregarProducto(objetoProducto){
  productosDisponibles.push(objetoProducto)
}

const NuevoProducto = new Producto(9, "Escritorio", 300, "Muebles", "404");
AgregarProducto(NuevoProducto)
////////////////////////////////////////////////////////////////////////////////


//Funcion Principal 
function agregarAlCarrito(index) {
  alert(`Se ha agregado al carrito :
  ${productosDisponibles[index].nombre}
  ${productosDisponibles[index].precio}$`);

  productosAdquiridos.push(productosDisponibles[index]);

  //2.-Calcular el total del carrito

  let total = productosAdquiridos.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0
  );

  //5.-Calcular el producto mas caro

  let productoMasCaro = productosAdquiridos.reduce((acumulador, producto) => {
    if (acumulador > producto.precio) {
      return acumulador;
    } else {
      return producto.precio;
    }
  }, 0);

  //Mostrar en la pagina el contenido del carrito
 
  carritoContenedor.innerHTML = `<div id ="factura">
  <h2>Factura</h2>
  <p> Total a Pagar : ${total}</p>
  <p> Productos adquiridos : ${productosAdquiridos.length}</p>
  <p> Producto mas caro : ${productoMasCaro}</p>
  <button id="descuento" onclick="descuento()">¿Quieres aplicar descuento?</button>
  </div>`;

cuantosProductos();
}



//¿Cuantos productos Hay?
function cuantosProductos() {
  const contadorCarrito = document.getElementById("carrito-contador");
  contadorCarrito.innerText = productosAdquiridos.length
}


//NO FUNCIONA 
function descuento(total){
  const porcentaje = parseInt(prompt("Ingrese un descuento"))
  descuento = (porcentaje / 100) * total;
  totalConDescuento = total - descuento;
  console.log(totalConDescuento)
}





document.addEventListener("DOMContentLoaded", function () {
  cargarProductos();
});
