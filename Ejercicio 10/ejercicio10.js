class Producto {
  constructor(id, nombre, precio, categoria, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.img = img;
  }
} //Implemente esta clase para crear los productos

let productosDisponibles = [
  { id: 1, nombre: "Laptop Gaming", precio: 1500, categoria: "Electrónica", imagen: "/img/pcgamer.png" },
  { id: 2, nombre: "Smartphone", precio: 800, categoria: "Electrónica", imagen: "/img/phone.png" },
  { id: 3, nombre: "Auriculares Bluetooth", precio: 150, categoria: "Electrónica", imagen: "/img/audifonos.png" },
  { id: 4, nombre: "Camiseta Deportiva", precio: 25, categoria: "Ropa", imagen: "/img/camisadeportiva.png" },
  { id: 5, nombre: "Zapatillas Running", precio: 120, categoria: "Ropa", imagen: "/img/zapatilla.png" },
  { id: 6, nombre: "Silla Oficina", precio: 200, categoria: "Hogar", imagen: "/img/sillagamer.png" },
  { id: 7, nombre: "Jersey NBA", precio: 45, categoria: "Ropa", imagen: "/img/jerseynba.png" },
  { id: 8, nombre: "Pelota Fútbol", precio: 30, categoria: "Deportes", imagen: "/img/brazuca.png" }
];

productosAdquiridos = [];

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

//Array con los productos adquiridos

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

  //Calcular el producto mas caro

  /*let Categoria = productosAdquiridos.filter(
    (producto) => producto.categoria === prompt("Ingrese la categoria")
  );
  console.log(Categoria);*/

  const carritoContenedor = document.getElementById("carrito-contenedor");
  carritoContenedor.innerHTML = `<p> Total a Pagar : ${total}</p>`;

  cuantosProductos();
  descuento(total)
  factura()
}


//¿Cuantos productos Hay?
function cuantosProductos() {
  const contadorCarrito = document.getElementById("carrito-contador");
  contadorCarrito.innerText = productosAdquiridos.length
}



//Practicamente todo lo estoy manejando con el indice del producto 
function factura(productosAdquiridos){

  const factura = document.getElementById('factura');
  factura.innerHTML = `<p> ${productosAdquiridos[index]}</p>`
}

function descuento(total){
  const porcentaje  = parseInt(prompt("Ingresa un descuento 1-100"))

  if(porcentaje  <0 || porcentaje  >100){
    alert("Ingresaste un descuento que no es  invalido")
  }

  const descuento = (porcentaje / 100) * total
}


document.addEventListener("DOMContentLoaded", function () {
  cargarProductos();
});
