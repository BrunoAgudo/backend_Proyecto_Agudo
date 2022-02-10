const fs = require('fs');




class Productos {
    constructor( nombre, precio, img, id) 
        {
        this.nombre = nombre
        this.precio = precio
        this.img = img
        this.id = id

         }};

let id = 1;

const  saveProduct = async (producto) => {
    
    try {
     
const productos = await fs.promises.readFile('./productos1.txt', 'utf-8')
const totalProductos = JSON.parse(productos)
totalProductos.push(producto)

await fs.promises.writeFile('./productos1.txt', JSON.stringify(totalProductos, null, 2));



     }
   catch { console.log('error')}
    }
          
const getById = async (iD) => {
   
    try {
    const productos = await fs.promises.readFile('./productos1.txt', 'utf-8')
    const obtenerProductos = JSON.parse(productos)
    const buscarId =  obtenerProductos.filter((id) => iD == id.id);
    if(buscarId.length === 0){
      console.log('null')
    }
    else {console.log(buscarId)}
 
    
    }
 catch {console.log ('error')}
}

const  getAllProduct = async () => {
try {
  const productos = await fs.promises.readFile('./productos1.txt', 'utf-8')
  const obtenerProductos = JSON.parse(productos)
  console.log(obtenerProductos)
  
  }
catch {console.log ('error')}
}


const deleteById = async (iD) => {
   
  try {
  const productos = await fs.promises.readFile('./productos1.txt', 'utf-8')
  const obtenerProductos = JSON.parse(productos)
  const buscarId =  obtenerProductos.filter((id) => iD !== id.id);
  console.log(buscarId)
  await fs.promises.writeFile('./productos1.txt', JSON.stringify(buscarId, null, 2));
}


catch {console.log ('error')}
}

const deleteAll = async () => {
   
  try {
 await fs.promises.readFile('./productos1.txt', 'utf-8')
  
  
  await fs.promises.writeFile('./productos1.txt', JSON.stringify([], null, 2));
}


catch {console.log ('error')}
}




 const producto1= new Productos('Bajo', 12050, 'foto', id++)
 const producto2= new Productos('Guitarra', 12350, 'foto2', id++)
 const producto3= new Productos('Arpa', 12000, 'foto3', id++)
 const producto4= new Productos('Saxo', 15000, 'foto4', id++)


 saveProduct( {

    nombre: producto4.nombre,
    precio:  producto4.precio,
    img: producto4.img,
    id: producto4.id++
    
    
 } )

//getById(3)

// getAllProduct()

//deleteById(1)

//deleteAll()