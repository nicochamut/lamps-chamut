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
    category: "desk lamps",
    urlCategory: 1,
  },

  {
    id: 2,
    title: "lamp 2",
    color: "brown",
    price: 36,
    imageUrl:
      "https://i.pinimg.com/564x/15/1c/36/151c36641e39074d4d9329d20d1a2512.jpg",
    features:
      "Modelo: nordic lamp |Ancho total 35 cm | Diámetro total 35 cm | Altura total 140 cm",
    stock: 4,
    category: "floor lamps",
    urlCategory: 2,
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
    category: "desk lamps",
    urlCategory: 1,
  },
  {
    id: 4,
    title: "lamp 4",
    color: "brown",
    price: 36,
    imageUrl:
      "https://i.pinimg.com/564x/0d/ee/14/0dee146977e5e1b32d5c907c137b7a1e.jpg",
    features:
      "Modelo: nordic lamp |Ancho total 35 cm | Diámetro total 35 cm | Altura total 140 cm",
    stock: 4,
    category: "floor lamps",
    urlCategory: 2,
  },
  {
    id: 5,
    title: "lamp 5",
    color: "brown",
    price: 36,
    imageUrl:
      "https://i.pinimg.com/564x/7b/1f/07/7b1f0704a91e5b3154d1bfb195c39ced.jpg",
    features:
      "Modelo: nordic lamp |Ancho total 35 cm | Diámetro total 35 cm | Altura total 140 cm",
    stock: 4,
    category: "floor lamps",
    urlCategory: 2,
  },
  {
    id: 6,
    title: "lamp 6",
    color: "brown",
    imageUrl:
      "https://i.pinimg.com/564x/b5/3c/d9/b53cd9f84714191c53385770b7c622b9.jpg",
    price: 50,
    features:
      "Modelo: nordic lamp |Ancho total 35 cm | Diámetro total 35 cm | Altura total 140 cm",
    stock: 8,
    category: "desk lamps",
    urlCategory: 1,
  },
];
const deskLamps = listaProductos.filter((x) => x.category === "desk lamps");
const floorLamps = listaProductos.filter((x) => x.category === "floor lamps");
export const getProductsByCategory = (prop) => {
  return new Promise((resolve, reject) => {
    if (prop === "desk-lamps") {
      resolve(deskLamps);
    } else if (prop === "floor-lamps") {
      resolve(floorLamps);
    } else {
      resolve(listaProductos);
    }
  });
};

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (listaProductos.length > 0) {
        resolve(listaProductos);
      } else {
        console(reject);
      }
    }, 400);
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
    }, 0);
  });
};
