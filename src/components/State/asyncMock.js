const listaProductos = [
  {
    id: 1,
    title: "lamp 1",
    color: "brown",
    imageUrl:
      "https://i.pinimg.com/564x/41/b0/85/41b085ffe96a6ac4c0653bcc82ed9427.jpg",
    price: 20,
    features:
      "Modelo: nordic lamp |Ancho total 35 cm | Diámetro total 35 cm | Altura total 140 cm",
    stock: 5,
  },
  {
    id: 2,
    title: "lamp 2",
    color: "brown",
    imageUrl:
      "https://i.pinimg.com/564x/b5/3c/d9/b53cd9f84714191c53385770b7c622b9.jpg",
    price: 50,
    features:
      "Modelo: nordic lamp |Ancho total 35 cm | Diámetro total 35 cm | Altura total 140 cm",
    stock: 8,
  },
  {
    id: 3,
    title: "lamp 3",
    color: "brown",
    price: 36,
    imageUrl:
      "https://i.pinimg.com/564x/01/fb/35/01fb3574a68e7ca36ddad9bee8e2a2ef.jpg",
    features:
      "Modelo: nordic lamp |Ancho total 35 cm | Diámetro total 35 cm | Altura total 140 cm",
    stock: 4,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (listaProductos.length > 0) {
        resolve(listaProductos);
      } else {
        console(reject);
      }
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (listaProductos.length > 0) {
        resolve(
          listaProductos.find((unProducto) => unProducto.id === parseInt(id))
        );
      } else {
        reject("Sin datos");
      }
    }, 1500);
  });
};
