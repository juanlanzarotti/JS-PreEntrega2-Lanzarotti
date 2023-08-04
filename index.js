// Declaración de constantes
const opcionSalir = 4;
const iva = 1.21;
const categorias = ["Cerveza IPA", "Cerveza APA", "Cerveza Golden"];
const productos = {
  "Cerveza IPA": [
    { id: 1, nombre: "Galaxy IPA", precio: 800 },
    { id: 2, nombre: "Mosaic IPA", precio: 700 },
    { id: 3, nombre: "NEIPA", precio: 900 },
  ],
  "Cerveza APA": [
    { id: 4, nombre: "APA con Frutos Rojos", precio: 600 },
    { id: 5, nombre: "APA con naranja", precio: 550 },
    { id: 6, nombre: "APA citrica", precio: 650 },
  ],
  "Cerveza Golden": [
    { id: 7, nombre: "Mexican Golden", precio: 500 },
    { id: 8, nombre: "Soft Golden", precio: 450 },
    { id: 9, nombre: "Golden Fresh", precio: 550 },
  ]
};

let carrito = [];

// Función para mostrar los productos por categoría
function mostrarProductoPorCategoria(categoria) {
  const productosCategoria = productos[categoria];
  let mensaje = `Mostrando productos de la categoría: ${categoria}\n\n`;
  productosCategoria.forEach(producto => {
    mensaje += `ID: ${producto.id} - Nombre: ${producto.nombre} - Precio: $${producto.precio}\n`;
  });
  alert(mensaje);
}

// Función para buscar un producto por su ID
function buscarProductoPorId(id) {
  for (const categoria in productos) {
    const productoEncontrado = productos[categoria].find(producto => producto.id === id);
    if (productoEncontrado) {
      return productoEncontrado;
    }
  }
  return null;
}

// Función para limpiar el carrito
function limpiarCarrito() {
  carrito = [];
}

// Función para generar un número de compra aleatorio
function generarNumeroDeCompra() {
  return Math.floor(Math.random() * 10000);
}

// Función para ver los productos
function verProductos() {
  let opcion;
  do {
    opcion = parseInt(
      prompt(
        "Elige la operación que deseas: \n 1-Cerveza IPA \n 2-Cerveza APA \n 3-Cerveza Golden \n 4-Salir"
      )
    );
    if (opcion >= 1 && opcion <= categorias.length) {
      const categoriaSeleccionada = categorias[opcion - 1];
      mostrarProductoPorCategoria(categoriaSeleccionada);
    } else if (opcion === opcionSalir) {
      return;
    } else {
      alert("Ingresaste una opción inválida.");
    }
  } while (true);
}

// Función para agregar un producto al carrito
function agregarItemAlCarrito() {
  let opcion;
  do {
    opcion = parseInt(
      prompt(
        "Elige el producto que deseas agregar al carrito: \n 1-Cerveza IPA \n 2-Cerveza APA \n 3-Cerveza Golden \n 4-Salir"
      )
    );
    if (opcion >= 1 && opcion <= categorias.length) {
      if (opcion === opcionSalir) {
        return;
      }
      const categoria = categorias[opcion - 1];
      const productosCategoria = productos[categoria];
      mostrarProductoPorCategoria(categoria);

      const idProducto = parseInt(prompt("Ingrese el ID del producto que desea agregar al carrito:"));
      if (idProducto === opcionSalir) {
        return;
      }

      const producto = buscarProductoPorId(idProducto);

      if (producto && productosCategoria.some(item => item.id === idProducto)) {
        carrito.push(producto);
        alert(`Se agregó "${producto.nombre}" al carrito.`);
      } else if (opcion !== opcionSalir) {
        alert("El ID del producto ingresado no es válido o no pertenece a la categoría seleccionada.");
      }
    } else if (opcion === opcionSalir) {
      return;
    } else {
      alert("Ingresaste una opción inválida.");
    }
  } while (true);
}

// Función para ver el contenido del carrito y calcular el total
function verCarrito() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
  } else {
    let mensaje = "Contenido del carrito:\n";
    let total = 0;
    carrito.forEach(producto => {
      mensaje += `${producto.nombre} - Precio: $${producto.precio}\n`;
      total += producto.precio;
    });
    mensaje += `\nSubtotal de la compra: $${total}\nTotal de la compra con IVA: $${total * iva}`;
    const confirmacionCompra = prompt(`${mensaje}\n¿Desea realizar la compra? (si/no)`).toLowerCase();
    if (confirmacionCompra === "si") {
      const numeroDeCompra = generarNumeroDeCompra();
      limpiarCarrito();
      alert(`¡Felicitaciones! La compra se realizó con éxito. Número de compra: ${numeroDeCompra}`);
      hizoCompra = true; // Se actualiza la variable para indicar que se hizo una compra
    }
  }
}

// Menú principal
alert("Bienvenido al carrito de compras de India Brewery, la cerveza más rica de BsAs");

const nombreUsuario = prompt("Ingrese su nombre de usuario");
const passUsuario = prompt("Ingrese su contraseña");

// Simulación de autenticación
if (passUsuario) {
  alert(`Bienvenido ${nombreUsuario}\nSu registro es correcto`);
}

let opcion;
let hizoCompra = false; // Variable para verificar si el usuario hizo una compra
do {
  opcion = parseInt(
    prompt(
      "Elige la operación que deseas: \n 1-Ver Cervezas \n 2-Agregar al carrito \n 3-Ver Carrito \n 4-Salir"
    )
  );
  if (opcion >= 1 && opcion <= opcionSalir - 1) {
    switch (opcion) {
      case 1:
        verProductos();
        break;
      case 2:
        agregarItemAlCarrito();
        break;
      case 3:
        verCarrito();
        break;
      default:
        alert("Ingresaste una opción inválida.");
        break;
    }
  } else if (opcion === opcionSalir) {
    break;
  } else {
    alert("Ingresaste una opción inválida.");
  }
} while (true);

// Mostrar mensaje de despedida solo si el usuario hizo una compra
if (hizoCompra) {
  alert("Gracias por su compra, vuelva pronto.");
} else {
  alert("Gracias por visitarnos, vuelva pronto.");
}

//Como se puede ver, en esta segunda entrega utilicé los conceptos de la primera entrega sumados a Arrays, Objetos y métodos de búsqueda, entre otros